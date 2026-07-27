import Module from "../models/Module.js";

import buildSearchQuery from "../../../../shared/builders/searchQuery.builder.js";

/**
 * Search Published Modules
 */
export const searchModules = ({
  search,
  limit = 5,
}) => {
  return Module.find(
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