import Note from "../models/Note.js";

import buildSearchQuery from "../../../../shared/builders/searchQuery.builder.js";

/**
 * Search Published Notes
 */
export const searchNotes = ({
  search,
  limit = 5,
}) => {
  return Note.find(
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