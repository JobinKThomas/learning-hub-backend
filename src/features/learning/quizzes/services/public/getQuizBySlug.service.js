import ApiError from "../../../../../shared/ApiError.js";

import ContentStatus from "../../../../../shared/enums/contentStatus.enum.js";
import Visibility from "../../../../../shared/enums/visibility.enum.js";

import { Messages } from "../../../../../shared/constants/messages.js";

import quizDetailPresenter from "../../presenters/public/quizDetail.presenter.js";
import questionPresenter from "../../presenters/public/question.presenter.js";

import * as quizRepository from "../../repositories/quiz.repository.js";
import * as questionRepository from "../../repositories/quizQuestion.repository.js";

const getQuizBySlugService = async (slug) => {
  const quiz = await quizRepository.findQuizBySlug(
    slug,
    {
      status: ContentStatus.PUBLISHED,
      visibility: Visibility.PUBLIC,
    }
  );

  if (!quiz) {
    throw new ApiError(
      404,
      Messages.QUIZ_NOT_FOUND
    );
  }

  const questions =
    await questionRepository.findQuestions({
      quiz: quiz.id,
      limit: Number.MAX_SAFE_INTEGER,
      sort: "order",
    });

  return {
    quiz: quizDetailPresenter(quiz),

    questions: questions.map(
      questionPresenter
    ),
  };
};

export default getQuizBySlugService;