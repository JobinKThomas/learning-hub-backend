import * as playgroundRepository from "../../repositories/playground.repository.js";

import ensurePlaygroundExists from "../domain/ensurePlaygroundExists.service.js";
import ensureTopicExists from "../../../topics/services/domain/ensureTopicExists.service.js";

import generateUniqueSlug from "../../../../../shared/services/generateUniqueSlug.service.js";

const updatePlaygroundService = async (
  id,
  payload,
  userId
) => {
  const playground =
    await ensurePlaygroundExists(id);

  const updatePayload = {
    ...payload,
  };

  if (
    payload.topic &&
    payload.topic.toString() !==
      playground.topic.toString()
  ) {
    await ensureTopicExists(
      payload.topic
    );
  }

  if (
    payload.title &&
    payload.title !==
      playground.title
  ) {
    updatePayload.slug =
      await generateUniqueSlug({
        repository: playgroundRepository,
        value: payload.title,
        excludeId: id,
      });
  }

  updatePayload.updatedBy =
    userId;

  const updatedPlayground =
    await playgroundRepository.updatePlayground(
      id,
      updatePayload
    );

  return updatedPlayground;
};

export default updatePlaygroundService;