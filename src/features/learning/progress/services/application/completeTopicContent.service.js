import ApiError from "../../../../../shared/ApiError.js";

import updateTopicProgress from "../domain/updateTopicProgress.service.js";

import ProgressType from "../../../../../shared/enums/progressType.enum.js";

const completeTopicContent = async ({
  userId,
  topicId,
  type,
}) => {
  if (
    !Object.values(ProgressType).includes(
      type
    )
  ) {
    throw new ApiError(
      400,
      `Invalid progress type: ${type}`
    );
  }

  const progress =
    await updateTopicProgress({
      userId,
      topicId,
      type,
    });

  return {
    topicId,

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

    completedAt:
      progress.completedAt,
  };
};

export default completeTopicContent;