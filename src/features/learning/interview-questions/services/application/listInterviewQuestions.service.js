import buildPaginationMeta from "../../../../../shared/builders/pagination.builder.js";

import interviewQuestionPresenter from "../../presenters/interviewQuestion.presenter.js";

import * as interviewQuestionRepository from "../../repositories/interviewQuestion.repository.js";

const listInterviewQuestionsService = async (
  filters
) => {
  const interviewQuestions =
    await interviewQuestionRepository.findInterviewQuestions(
      filters
    );

  const total =
    await interviewQuestionRepository.countInterviewQuestions(
      filters
    );

  return {
    items: interviewQuestions.map(
      interviewQuestionPresenter
    ),

    pagination: buildPaginationMeta({
      page: filters.page,
      limit: filters.limit,
      total,
    }),
  };
};

export default listInterviewQuestionsService;