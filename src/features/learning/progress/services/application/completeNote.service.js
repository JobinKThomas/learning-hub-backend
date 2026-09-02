import ApiError from "../../../../../shared/ApiError.js";

import * as topicRepository from "../../../topics/repositories/topic.repository.js";
import updateTopicProgress from "../domain/updateTopicProgress.service.js";

const completeNote = async ({
  topicId,
  userId,
}) => {
  /**
   * Find topic
   */
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

  /**
   * Update topic progress
   */
  return updateTopicProgress({
    userId,

    topicId: topic._id,

    learningPathId:
      topic.learningPath,

    moduleId:
      topic.module,

    sectionId:
      topic.section,

    type: "NOTE",
  });
};

export default completeNote;