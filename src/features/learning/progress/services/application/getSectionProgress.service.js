import ApiError from "../../../../../shared/ApiError.js";

import * as progressRepository from "../../repositories/progress.repository.js";

import * as topicRepository from "../../../topics/repositories/topic.repository.js";

import * as sectionRepository from "../../../sections/repositories/section.repository.js";

const getSectionProgress = async ({
  userId,
  sectionId,
}) => {
  const [
    section,
    progressRecords,
    totalTopics,
  ] = await Promise.all([
    sectionRepository.findSectionById(
      sectionId
    ),

    progressRepository.findProgressBySection(
      userId,
      sectionId
    ),

    topicRepository.countTopicsBySection(
      sectionId
    ),
  ]);

  if (!section) {
    throw new ApiError(
      404,
      "Section not found."
    );
  }

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

  return {
    section: {
      id: section._id.toString(),
      title: section.title,
      slug: section.slug,
    },

    progress,

    totalTopics,

    completedTopics:
      progressRecords.filter(
        (item) => item.progress === 100
      ).length,

    inProgressTopics:
      progressRecords.filter(
        (item) =>
          item.progress > 0 &&
          item.progress < 100
      ).length,
  };
};

export default getSectionProgress;