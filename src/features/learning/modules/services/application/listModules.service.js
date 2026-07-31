import * as moduleRepository from "../../repositories/module.repository.js";

import ensureLearningPathExists from "../../../learning-paths/services/domain/ensureLearningPathExists.service.js";

import buildContentQuery from "../../../../../shared/builders/contentQuery.builder.js";
import buildSort from "../../../../../shared/builders/sort.builder.js";
import buildPaginationMeta from "../../../../../shared/builders/pagination.builder.js";

const listModulesService = async ({
  learningPathId,
  ...filters
}) => {
  await ensureLearningPathExists(
    learningPathId
  );

  const page =
    Number(filters.page) || 1;

  const limit =
    Number(filters.limit) || 20;

  const query =
    buildContentQuery({
      ...filters,
      learningPath: learningPathId,
    });
console.log(query);
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
    await moduleRepository.findModules({
      query,
      sort,
      page,
      limit,
    });

  // const total =
  //   await moduleRepository.countModules(
  //     query
  //   );
  const total = await moduleRepository.countModules({
  query,
});

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

export default listModulesService;