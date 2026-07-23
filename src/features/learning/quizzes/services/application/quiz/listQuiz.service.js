import buildPaginationMeta from "../../../../../../shared/builders/pagination.builder.js";

import quizPresenter from "../../../presenters/quiz.presenter.js";

import * as quizRepository from "../../../repositories/quiz.repository.js";

const listQuizzesService = async (
  filters
) => {
  const quizzes =
    await quizRepository.findQuizzes(filters);

  const total =
    await quizRepository.countQuizzes(filters);

  return {
    items: quizzes.map(quizPresenter),

    pagination: buildPaginationMeta({
      page: filters.page,
      limit: filters.limit,
      total,
    }),
  };
};

export default listQuizzesService;