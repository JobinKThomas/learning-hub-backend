import ApiError from "../../../../../shared/ApiError.js";

import * as progressRepository from "../../repositories/progress.repository.js";
import * as topicRepository from "../../../topics/repositories/topic.repository.js";

const getContinueLearning = async (userId) => {
  const progress =
    await progressRepository.findLatestIncompleteProgress(
      userId
    );

  if (!progress) {
    return null;
  }

  const topic =
    await topicRepository.findTopicById(
      progress.topic
    );

  if (!topic) {
    throw new ApiError(
      404,
      "Topic not found."
    );
  }

  return {
    topic: {
      id: topic._id.toString(),
      title: topic.title,
      slug: topic.slug,
    },

    learningPath:
      progress.learningPath?.toString(),

    module:
      progress.module?.toString(),

    section:
      progress.section?.toString(),

    progress:
      progress.progress,

    noteCompleted:
      progress.noteCompleted,

    resourceCompleted:
      progress.resourceCompleted,

    playgroundCompleted:
      progress.playgroundCompleted,

    quizCompleted:
      progress.quizCompleted,

    lastVisitedAt:
      progress.lastVisitedAt,

    nextContent:
      getNextContent(progress),
  };
};

const getNextContent = (progress) => {
  if (!progress.noteCompleted) {
    return "NOTE";
  }

  if (!progress.resourceCompleted) {
    return "RESOURCE";
  }

  if (!progress.playgroundCompleted) {
    return "PLAYGROUND";
  }

  if (!progress.quizCompleted) {
    return "QUIZ";
  }

  return null;
};

export default getContinueLearning;