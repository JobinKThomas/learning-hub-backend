import * as learningPathRepository from "../repositories/learningPath.repository.js";

import learningPathDto from "../dto/learningPath.dto.js";

import buildLearningPathQuery from "../../shared/utils/buildLearningPathQuery.js";

const listLearningPathsService = async (filters = {}) => {
  const {
    page = 1,
    limit = 20,
  } = filters;

  const query = buildLearningPathQuery(filters);

  const learningPaths =
    await learningPathRepository.findLearningPaths(filters);

  const total =
    await learningPathRepository.countLearningPaths(query);

  const totalPages = Math.ceil(
    total / Number(limit)
  );

  return {
    items: learningPaths.map(learningPathDto),

    meta: {
      page: Number(page),
      limit: Number(limit),
      total,
      totalPages,
      hasNext: Number(page) < totalPages,
      hasPrevious: Number(page) > 1,
    },
  };
};

export default listLearningPathsService;