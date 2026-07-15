import ApiError from "../../../../../shared/ApiError.js";
import Errors from "../../../../../shared/constants/errors.js";

import * as topicRepository from "../../repositories/topic.repository.js";

const getTopicBySlugService = async (
  slug
) => {
  const topic =
    await topicRepository.findTopicBySlug(
      slug
    );

  if (!topic) {
    throw new ApiError(
      404,
      Errors.TOPIC_NOT_FOUND
    );
  }

  return topic;
};

export default getTopicBySlugService;