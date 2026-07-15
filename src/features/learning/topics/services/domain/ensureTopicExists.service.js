import ApiError from "../../../../../shared/ApiError.js";
import Errors from "../../../../../shared/constants/errors.js";

import * as topicRepository from "../../repositories/topic.repository.js";

const ensureTopicExists = async (
  topicId
) => {
  const topic =
    await topicRepository.findTopicById(
      topicId
    );

  if (!topic) {
    throw new ApiError(
      404,
      Errors.TOPIC_NOT_FOUND
    );
  }

  return topic;
};

export default ensureTopicExists;