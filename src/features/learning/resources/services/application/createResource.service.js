import * as resourceRepository from "../../repositories/resource.repository.js";
import * as topicRepository from "../../../topics/repositories/topic.repository.js";

import ApiError from "../../../../../shared/ApiError.js";

import generateUniqueSlug from "../../../../../shared/services/generateUniqueSlug.service.js";
import ensureTopicExists from "../../../topics/services/domain/ensureTopicExists.service.js";

const createResourceService = async (
  payload,
  userId
) => {
  const topic =
    await ensureTopicExists(
      payload.topic
    );

  if (!topic) {
    throw new ApiError(
      404,
      "Topic not found"
    );
  }

  const slug =
    await generateUniqueSlug({
      repository:
        resourceRepository,
      title: payload.title,
    });

  return resourceRepository.createResource({
    ...payload,
    slug,
    createdBy: userId,
  });
};

export default createResourceService;