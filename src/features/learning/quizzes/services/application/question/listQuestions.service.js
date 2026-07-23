import buildPaginationMeta from "../../../../../../shared/builders/pagination.builder.js";

import questionPresenter from "../../../presenters/quizQuestion.presenter.js";

import * as questionRepository from "../../../repositories/quizQuestion.repository.js";

const listQuestionsService = async (
  filters
) => {
  const questions =
    await questionRepository.findQuestions(
      filters
    );

  const total =
    await questionRepository.countQuestions(
      filters
    );

  return {
    items: questions.map(
      questionPresenter
    ),

    pagination:
      buildPaginationMeta({
        page: filters.page,
        limit: filters.limit,
        total,
      }),
  };
};

export default listQuestionsService;