import * as resourceRepository from "../../repositories/resource.repository.js";

import ensureTopicExists from "../../../topics/services/domain/ensureTopicExists.service.js";
import ensureResourceExists from "../domain/ensureResourceExists.service.js";

import generateUniqueSlug from "../../../../../shared/services/generateUniqueSlug.service.js";

const updateResourceService = async (
  id,
  payload,
  userId
) => {
  const resource =
    await ensureResourceExists(id);

  const updatePayload = {
    ...payload,
  };

  /**
   * Topic Changed
   */
  if (
    payload.topic &&
    payload.topic.toString() !==
      resource.topic.toString()
  ) {
    await ensureTopicExists(
      payload.topic
    );
  }

  /**
   * Title Changed
   */
  if (
    payload.title &&
    payload.title !== resource.title
  ) {
    updatePayload.slug =
      await generateUniqueSlug({
        repository: resourceRepository,
        value: payload.title,
        excludeId: id,
      });
  }

  updatePayload.updatedBy =
    userId;

  const updatedResource =
    await resourceRepository.updateResource(
      id,
      updatePayload
    );

  return updatedResource;
};

export default updateResourceService;