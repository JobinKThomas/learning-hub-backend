import ApiError from "../../../../../shared/ApiError.js";

import * as moduleRepository from "../../../modules/repositories/module.repository.js";
import * as progressRepository from "../../repositories/progress.repository.js";
import * as topicRepository from "../../../topics/repositories/topic.repository.js";

const getModuleProgress = async ({
  userId,
  moduleId,
}) => {
  const [
    progressRecords,
    totalTopics,
  ] = await Promise.all([
    progressRepository.findProgressByModule(
      userId,
      moduleId
    ),

    topicRepository.countTopicsByModule(
      moduleId
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
    module: {
      id: module._id.toString(),
      title: module.title,
      slug: module.slug,
    },
    progress,
    totalTopics,
    completedTopics,
    inProgressTopics
  };
};

export default getModuleProgress;