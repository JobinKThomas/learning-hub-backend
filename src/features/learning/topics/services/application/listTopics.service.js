import * as topicRepository from "../../repositories/topic.repository.js";

import buildContentQuery from "../../../../../shared/builders/contentQuery.builder.js";
import buildSort from "../../../../../shared/builders/sort.builder.js";
import buildPaginationMeta from "../../../../../shared/builders/pagination.builder.js";

const listTopicsService = async (
  filters = {}
) => {
  const page =
    Number(filters.page) || 1;

  const limit =
    Number(filters.limit) || 20;

  const query =
    buildContentQuery(filters);

  const sort =
    buildSort(filters.sort);

  const items =
    await topicRepository.findTopics({
      query,
      sort,
      page,
      limit,
    });

  const total =
    await topicRepository.countTopics(
      query
    );

  return {
    items,
    meta: buildPaginationMeta({
      page,
      limit,
      total,
    }),
  };
};

export default listTopicsService;