import Topic from "../models/Topics.js";

import buildSearchQuery from "../../../../shared/builders/searchQuery.builder.js";

/**
 * Search Published Topics
 */
export const searchTopics = ({
  search,
  limit = 5,
}) => {
  return Topic.find(
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