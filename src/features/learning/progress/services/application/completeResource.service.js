import ApiError from "../../../../../shared/ApiError.js";

import * as topicRepository from "../../../topics/repositories/topic.repository.js";

import updateTopicProgress from "../domain/updateTopicProgress.service.js";

import ProgressType from "../../../../../shared/enums/progressType.enum.js";

const completeResource = async ({
  topicId,
  userId,
}) => {
  const topic =
    await topicRepository.findTopicById(
      topicId
    );

  if (!topic) {
    throw new ApiError(
      404,
      "Topic not found."
    );
  }

  return updateTopicProgress({
    userId,
    topicId: topic._id,
    learningPathId: topic.learningPath,
    moduleId: topic.module,
    sectionId: topic.section,
    type: ProgressType.RESOURCE,
  });
};

export default completeResource;