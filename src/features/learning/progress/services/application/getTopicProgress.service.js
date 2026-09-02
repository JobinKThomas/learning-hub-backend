import * as progressRepository from "../../repositories/progress.repository.js";

const getTopicProgressService = async (
  userId,
  topicId
) => {
  const progress =
    await progressRepository.findProgressByUserAndTopic(
      userId,
      topicId
    );

  if (!progress) {
    return {
      topic: topicId,
      noteCompleted: false,
      resourceCompleted: false,
      playgroundCompleted: false,
      quizCompleted: false,
      progress: 0,
      lastVisitedAt: null,
      completedAt: null,
    };
  }

  return progress;
};

export default getTopicProgressService;