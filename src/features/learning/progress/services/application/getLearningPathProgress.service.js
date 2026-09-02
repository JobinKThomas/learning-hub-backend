import ApiError from "../../../../../shared/ApiError.js";

import * as learningPathRepository from "../../../learning-paths/repositories/learningPath.repository.js";
import * as progressRepository from "../../repositories/progress.repository.js";
import * as topicRepository from "../../../topics/repositories/topic.repository.js";

const getLearningPathProgress = async ({
  userId,
  learningPathId,
}) => {
  const [
    progressRecords,
    totalTopics,
  ] = await Promise.all([
    progressRepository.findProgressByLearningPath(
      userId,
      learningPathId
    ),

    topicRepository.countTopicsByLearningPath(
      learningPathId
    ),
  ]);

  const totalProgress =
    progressRecords.reduce(
      (sum, item) =>
        sum + Number(item.progress || 0),
      0
    );

  const progress =
    totalTopics > 0
      ? Math.round(
          totalProgress / totalTopics
        )
      : 0;

  const completedTopics =
    progressRecords.filter(
      (item) => item.progress === 100
    ).length;

  const inProgressTopics =
    progressRecords.filter(
      (item) =>
        item.progress > 0 &&
        item.progress < 100
    ).length;

  return {
    learningPath: {
      id: learningPath._id.toString(),
      title: learningPath.title,
      slug: learningPath.slug,
    },
    progress,
    totalTopics,
    completedTopics,
    inProgressTopics
  };
};

export default getLearningPathProgress;