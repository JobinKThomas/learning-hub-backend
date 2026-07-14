import * as learningPathRepository
  from "../../repositories/learningPath.repository.js";

import buildContentQuery
  from "../../../../../shared/builders/contentQuery.builder.js";

import buildSort
  from "../../../../../shared/builders/sort.builder.js";

import buildPaginationMeta
  from "../../../../../shared/builders/pagination.builder.js";

const listLearningPathsService =
async (filters = {}) => {

  const page = Number(filters.page) || 1;

  const limit = Number(filters.limit) || 20;

  const query =
    buildContentQuery(filters);

  const sort =
    buildSort(
      filters.sort,
      [
        "order",
        "title",
        "createdAt",
        "updatedAt",
      ],
      "order"
    );

  const items =
    await learningPathRepository.findLearningPaths({
      query,
      sort,
      page,
      limit,
    });

  const total =
    await learningPathRepository.countLearningPaths(
      query
    );

  return {
    items,
    meta:
      buildPaginationMeta({
        page,
        limit,
        total,
      }),
  };
};

export default listLearningPathsService;