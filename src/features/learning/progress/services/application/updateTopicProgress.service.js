import * as progressRepository from "../../repositories/progress.repository.js";

import calculateTopicProgress from "../domain/calculateTopicProgress.service.js";
import ProgressType from "../../../../../shared/enums/progressType.enum.js";

import getTopicHierarchy from "../domain/getTopicHierarchy.service.js";

const updateTopicProgress = async ({
  userId,
  topicId,
  type,
}) => {
  /**
   * Resolve hierarchy from topic.
   */
  const {
    topic,
    section,
    module,
    learningPath,
  } = await getTopicHierarchy(topicId);

  /**
   * Find existing progress or create it.
   */
  const progress =
    await progressRepository.findOrCreateProgress({
      userId,

      learningPathId:
        learningPath._id,

      moduleId:
        module._id,

      sectionId:
        section._id,

      topicId:
        topic._id,
    });

  /**
   * Mark requested content as completed.
   */
  switch (type) {
    case ProgressType.NOTE:
      progress.noteCompleted = true;
      break;

    case ProgressType.RESOURCE:
      progress.resourceCompleted = true;
      break;

    case ProgressType.PLAYGROUND:
      progress.playgroundCompleted = true;
      break;

    case ProgressType.QUIZ:
      progress.quizCompleted = true;
      break;

    default:
      throw new Error(
        `Invalid progress type: ${type}`
      );
  }

  /**
   * Calculate topic progress.
   */
  const percentage =
    calculateTopicProgress({
      noteCompleted:
        progress.noteCompleted,

      resourceCompleted:
        progress.resourceCompleted,

      playgroundCompleted:
        progress.playgroundCompleted,

      quizCompleted:
        progress.quizCompleted,
    });

  progress.progress = percentage;

  /**
   * Update last activity.
   */
  progress.lastVisitedAt = new Date();

  /**
   * Mark topic completed.
   */
  if (percentage === 100) {
    if (!progress.completedAt) {
      progress.completedAt = new Date();
    }
  } else {
    progress.completedAt = null;
  }

  await progress.save();

  return progress;
};

export default updateTopicProgress;