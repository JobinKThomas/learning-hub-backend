import LearningPath from "../models/LearningPath.js";

import buildSearchQuery from "../../../../shared/builders/searchQuery.builder.js";

/**
 * Search Published Learning Paths
 */
export const searchLearningPaths = ({
  search,
  limit = 5,
}) => {
  return LearningPath.find(
    buildSearchQuery(search)
  )
    .sort({
      score: {
        $meta: "textScore",
      },
    })
    .select({
      score: {
        $meta: "textScore",
      },
    })
    .limit(limit)
    .lean();
};