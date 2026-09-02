import ApiError from "../../../../../shared/ApiError.js";

import calculateTopicProgress from "./calculateTopicProgress.service.js";

import ProgressType from "../../../../../shared/enums/progressType.enum.js";

import * as progressRepository from "../../repositories/progress.repository.js";
import * as topicRepository from "../../../topics/repositories/topic.repository.js";
import * as noteRepository from "../../../notes/repositories/note.repository.js";
import * as resourceRepository from "../../../resources/repositories/resource.repository.js";
import * as playgroundRepository from "../../../playground/repositories/playground.repository.js";
import * as quizRepository from "../../../quizzes/repositories/quiz.repository.js";



const updateTopicProgress = async ({
  userId,
  topicId,
  type,
}) => {
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
      "Topic not found."
    );
  }

  /**
   * Verify content exists.
   */
  const [
    note,
    resource,
    playground,
    quiz,
  ] = await Promise.all([
    noteRepository.findOneByTopic(
      topicId
    ),

    resourceRepository.findOneByTopic(
      topicId
    ),

    playgroundRepository.findOneByTopic(
      topicId
    ),

    quizRepository.findOneByTopic(
      topicId
    ),
  ]);

  /**
   * Find/Create Progress
   */
  const progress =
    await progressRepository.findOrCreateProgress({
      userId,

      learningPathId:
        topic.learningPath,

      moduleId:
        topic.module,

      sectionId:
        topic.section,

      topicId,
    });

  /**
   * Mark requested content completed.
   */
  switch (type) {
    case ProgressType.NOTE:

      if (!note) {
        throw new ApiError(
          404,
          "Note not found for this topic."
        );
      }

      progress.noteCompleted =
        true;

      break;

    case ProgressType.RESOURCE:

      if (!resource) {
        throw new ApiError(
          404,
          "Resource not found for this topic."
        );
      }

      progress.resourceCompleted =
        true;

      break;

    case ProgressType.PLAYGROUND:

      if (!playground) {
        throw new ApiError(
          404,
          "Playground not found for this topic."
        );
      }

      progress.playgroundCompleted =
        true;

      break;

    case ProgressType.QUIZ:

      if (!quiz) {
        throw new ApiError(
          404,
          "Quiz not found for this topic."
        );
      }

      progress.quizCompleted =
        true;

      break;

    default:
      throw new ApiError(
        400,
        `Invalid progress type: ${type}`
      );
  }

  /**
   * Calculate dynamic progress.
   */
  progress.progress =
    calculateTopicProgress({
      noteExists: !!note,
      resourceExists: !!resource,
      playgroundExists: !!playground,
      quizExists: !!quiz,

      noteCompleted:
        progress.noteCompleted,

      resourceCompleted:
        progress.resourceCompleted,

      playgroundCompleted:
        progress.playgroundCompleted,

      quizCompleted:
        progress.quizCompleted,
    });

  /**
   * Update last activity.
   */
  progress.lastVisitedAt =
    new Date();

  /**
   * Mark topic completed.
   */
  if (progress.progress === 100) {
    if (!progress.completedAt) {
      progress.completedAt =
        new Date();
    }
  } else {
    progress.completedAt = null;
  }

  await progress.save();

  return progress;
};

export default updateTopicProgress;