import ApiError from "../../../../shared/ApiError.js";
import { Messages } from "../../../../shared/constants/messages.js";

import quizAttemptPresenter from "../presenters/quizAttempt.presenter.js";

import * as quizAttemptRepository from "../repositories/quizAttempt.repository.js";

const getQuizAttemptService = async (id) => {
  const attempt =
    await quizAttemptRepository.findQuizAttemptById(
      id
    );

  if (!attempt) {
    throw new ApiError(
      404,
      Messages.QUIZ_ATTEMPT_NOT_FOUND
    );
  }

  return quizAttemptPresenter(attempt);
};

export default getQuizAttemptService;