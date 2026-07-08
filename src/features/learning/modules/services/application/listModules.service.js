import * as moduleRepository from "../../repositories/module.repository.js";

import moduleDto from "../../dto/module.dto.js";

import ensureLearningPathExists from "../../../learning-paths/services/domain/ensureLearningPathExists.service.js";

import buildPaginationMeta from "../../../../../shared/builders/paginationMeta.builder.js";

const listModulesService = async ({
  learningPathId,
  ...filters
}) => {
  await ensureLearningPathExists(
    learningPathId
  );

  const modules =
    await moduleRepository.findModules({
      learningPath: learningPathId,
      ...filters,
    });

  const total =
    await moduleRepository.countModules({
      learningPath: learningPathId,
      deletedAt: null,
    });

  return {
    items: modules.map(moduleDto),

    meta: buildPaginationMeta({
      page: Number(filters.page ?? 1),
      limit: Number(filters.limit ?? 20),
      total,
    }),
  };
};

export default listModulesService;