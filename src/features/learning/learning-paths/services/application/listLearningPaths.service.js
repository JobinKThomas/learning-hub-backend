import * as learningPathRepository from "../repositories/learningPath.repository.js";

import learningPathPresenter from "../presenters/learningPath.presenter.js";

import buildContentQuery from "../../../../../shared/builders/contentQuery.builder.js";

const listLearningPathsService = async (filters = {}) => {
  const {
    page = 1,
    limit = 20,
  } = filters;

  const query = buildContentQuery(filters);

  const learningPaths =
    await learningPathRepository.findLearningPaths(filters);

  const total =
    await learningPathRepository.countLearningPaths(query);

  const totalPages = Math.ceil(
    total / Number(limit)
  );

  return {
    items: learningPaths.map(learningPathPresenter),

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