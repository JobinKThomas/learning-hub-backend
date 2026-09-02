import * as progressRepository from "../../repositories/progress.repository.js";

import * as learningPathRepository from "../../../learning-paths/repositories/learningPath.repository.js";

import * as topicRepository from "../../../topics/repositories/topic.repository.js";

const getProgressDashboard = async (userId) => {
  /**
   * Load learning paths and user progress
   * in parallel.
   */
  const [
    learningPaths,
    progressRecords,
  ] = await Promise.all([
    learningPathRepository.findPublicLearningPaths(),

    progressRepository.findAllProgressByUser(
      userId
    ),
  ]);

  /**
   * Overall statistics
   */
  const totalProgress =
    progressRecords.reduce(
      (sum, item) =>
        sum + Number(item.progress || 0),
      0
    );

  const totalProgressTopics =
    progressRecords.length;

  const overallProgress =
    totalProgressTopics > 0
      ? Math.round(
          totalProgress /
            totalProgressTopics
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

  /**
   * Create quick lookup by Learning Path.
   */
  const progressByLearningPath =
    new Map();

  for (const record of progressRecords) {
    const learningPathId =
      record.learningPath?.toString();

    if (!learningPathId) {
      continue;
    }

    if (
      !progressByLearningPath.has(
        learningPathId
      )
    ) {
      progressByLearningPath.set(
        learningPathId,
        []
      );
    }

    progressByLearningPath
      .get(learningPathId)
      .push(record);
  }

  /**
   * Build Learning Path progress.
   */
  const learningPathData =
    await Promise.all(
      learningPaths.map(
        async (learningPath) => {
          const learningPathId =
            learningPath._id.toString();

          const records =
            progressByLearningPath.get(
              learningPathId
            ) || [];

          const totalTopics =
            await topicRepository.countTopicsByLearningPath(
              learningPath._id
            );

          const progressTotal =
            records.reduce(
              (sum, item) =>
                sum +
                Number(
                  item.progress || 0
                ),
              0
            );

          const progress =
            totalTopics > 0
              ? Math.round(
                  progressTotal /
                    totalTopics
                )
              : 0;

          return {
            id: learningPathId,

            title:
              learningPath.title,

            slug:
              learningPath.slug,

            progress,

            totalTopics,

            completedTopics:
              records.filter(
                (item) =>
                  item.progress === 100
              ).length,

            inProgressTopics:
              records.filter(
                (item) =>
                  item.progress > 0 &&
                  item.progress < 100
              ).length,
          };
        }
      )
    );
  const totalTopics =
  await topicRepository.countAllTopics();
  
  const overallProgress =
  totalTopics > 0
    ? Math.round(
        totalProgress /
          totalTopics
      )
    : 0;
  
  /**
   * Recent activity
   */
  const recentActivity =
    progressRecords
      .filter(
        (item) =>
          item.lastVisitedAt
      )
      .slice(0, 5)
      .map((item) => ({
        topic:
          item.topic?.toString(),

        progress:
          item.progress,

        lastVisitedAt:
          item.lastVisitedAt,

        completedAt:
          item.completedAt,
      }));

  return {
    overall: {
      progress:
        overallProgress,

      totalTopics:
        totalProgressTopics,

      completedTopics,

      inProgressTopics,
    },

    learningPaths:
      learningPathData,

    recentActivity,
  };
};

export default getProgressDashboard;