import ContentStatus from "../enums/contentStatus.enum.js";
import Visibility from "../enums/visibility.enum.js";

const buildSearchQuery = (search) => ({
  deletedAt: null,
  status: ContentStatus.PUBLISHED,
  visibility: Visibility.PUBLIC,
  ...(search?.trim() && {
    $text: {
      $search: search,
    },
  }),
});

export default buildSearchQuery;