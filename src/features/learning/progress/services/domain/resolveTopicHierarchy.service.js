import ApiError from "../../../../../shared/ApiError.js";
import Errors from "../../../../../shared/constants/errors.js";

import * as topicRepository from "../../../topics/repositories/topic.repository.js";
import * as sectionRepository from "../../../sections/repositories/section.repository.js";
import * as moduleRepository from "../../../modules/repositories/module.repository.js";
import * as learningPathRepository from "../../../learning-paths/repositories/learningPath.repository.js";

const resolveTopicHierarchy = async (topicId) => {
  /**
   * Find Topic
   */
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

  /**
   * Find Section
   */
  const section =
    await sectionRepository.findSectionById(
      topic.section
    );

  if (!section) {
    throw new ApiError(
      404,
      Errors.SECTION_NOT_FOUND
    );
  }

  /**
   * Find Module
   */
  const module =
    await moduleRepository.findModuleById(
      section.module
    );

  if (!module) {
    throw new ApiError(
      404,
      Errors.MODULE_NOT_FOUND
    );
  }

  /**
   * Find Learning Path
   */
  const learningPath =
    await learningPathRepository.findLearningPathById(
      module.learningPath
    );

  if (!learningPath) {
    throw new ApiError(
      404,
      Errors.LEARNING_PATH_NOT_FOUND
    );
  }

  return {
    topic,
    section,
    module,
    learningPath,
  };
};

export default resolveTopicHierarchy;