import ContentStatus from "../../../../../shared/enums/contentStatus.enum.js";
import Visibility from "../../../../../shared/enums/visibility.enum.js";

import buildPaginationMeta from "../../../../../shared/builders/pagination.builder.js";

import learningPathPresenter from "../../presenters/public/learningPath.presenter.js";

import * as learningPathRepository from "../../repositories/learningPath.repository.js";

const getLearningPathsService = async (filters = {}) => {
  const query = {
    ...filters,

    status: ContentStatus.PUBLISHED,

    visibility: Visibility.PUBLIC,
  };

  const learningPaths =
    await learningPathRepository.findLearningPaths(
      query
    );

  const total =
    await learningPathRepository.countLearningPaths(
      query
    );

  return {
    items: learningPaths.map(
      learningPathPresenter
    ),

    pagination: buildPaginationMeta({
      page: filters.page,
      limit: filters.limit,
      total,
    }),
  };
};

export default getLearningPathsService;