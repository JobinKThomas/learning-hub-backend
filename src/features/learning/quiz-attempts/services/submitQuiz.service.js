import ApiError from "../../../../shared/ApiError.js";

import { Messages } from "../../../../shared/constants/messages.js";
import ContentStatus from "../../../../shared/enums/contentStatus.enum.js";
import Visibility from "../../../../shared/enums/visibility.enum.js";

import calculateQuizResult from "../../../../shared/services/quizScoring.service.js";

import quizAttemptPresenter from "../presenters/quizAttempt.presenter.js";

import * as quizRepository from "../../quizzes/repositories/quiz.repository.js";
import * as questionRepository from "../../quizzes/repositories/quizQuestion.repository.js";

import * as quizAttemptRepository from "../repositories/quizAttempt.repository.js";

const submitQuizService = async ({
  slug,
  user = null,
  answers,
  ipAddress = "",
  userAgent = "",
}) => {
  // Load Quiz
  const quiz = await quizRepository.findQuizBySlug(slug, {
    status: ContentStatus.PUBLISHED,
    visibility: Visibility.PUBLIC,
  });

  if (!quiz) {
    throw new ApiError(
      404,
      Messages.QUIZ_NOT_FOUND
    );
  }

  // Load Questions
  const questions =
    await questionRepository.findQuestionsByQuiz(
      quiz.id
    );

  if (!questions.length) {
    throw new ApiError(
      400,
      "Quiz has no questions."
    );
  }

  // Calculate Result
  const result = calculateQuizResult({
    quiz,
    questions,
    answers,
  });

  // Save Attempt
  const attempt =
    await quizAttemptRepository.createQuizAttempt({
      user,
      quiz: quiz.id,

      answers: result.answers,

      score: result.score,
      totalPoints: result.totalPoints,
      percentage: result.percentage,
      passed: result.passed,

      startedAt: new Date(),
      submittedAt: new Date(),

      ipAddress,
      userAgent,
    });

  return quizAttemptPresenter(attempt);
};

export default submitQuizService;