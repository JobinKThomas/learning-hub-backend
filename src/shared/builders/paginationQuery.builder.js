import {
  DEFAULT_PAGE,
  DEFAULT_LIMIT,
  MAX_LIMIT,
} from "../constants/pagination.js";

const buildPaginationQuery = (
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT
) => {
  const safePage = Math.max(
    DEFAULT_PAGE,
    Number(page) || DEFAULT_PAGE
  );

  const safeLimit = Math.min(
    MAX_LIMIT,
    Math.max(
      1,
      Number(limit) || DEFAULT_LIMIT
    )
  );

  return {
    page: safePage,
    limit: safeLimit,
    skip: (safePage - 1) * safeLimit,
  };
};

export default buildPaginationQuery;