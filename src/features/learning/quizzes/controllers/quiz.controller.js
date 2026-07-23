import asyncHandler from "../../../../middleware/asyncHandler.middleware.js";

import ApiResponse from "../../../../shared/ApiResponse.js";
import Messages from "../../../../shared/constants/messages.js";

import quizPresenter from "../presenters/quiz.presenter.js";

import createQuizService from "../services/application/quiz/createQuiz.service.js";
import listQuizzesService from "../services/application/quiz/listQuiz.service.js";
import getQuizBySlugService from "../services/application/quiz/getQuizBySlug.service.js";
import updateQuizService from "../services/application/quiz/updateQuiz.service.js";
import updateQuizStatusService from "../services/application/quiz/updateQuizStatus.service.js";
import deleteQuizService from "../services/application/quiz/deleteQuiz.service.js";

/**
 * Create Quiz
 */
export const createQuiz = asyncHandler(async (req, res) => {
  const quiz = await createQuizService(
    req.body,
    req.user.id
  );

  return res.status(201).json(
    new ApiResponse({
      message: Messages.QUIZ_CREATED,
      data: quizPresenter(quiz),
    })
  );
});

/**
 * List Quizzes
 */
export const listQuizzes = asyncHandler(async (req, res) => {
  const result = await listQuizzesService(req.query);

  return res.status(200).json(
    new ApiResponse({
      data: result,
    })
  );
});

/**
 * Get Quiz by Slug
 */
export const getQuizBySlug = asyncHandler(async (req, res) => {
  const quiz = await getQuizBySlugService(
    req.params.slug
  );

  return res.status(200).json(
    new ApiResponse({
      data: quizPresenter(quiz),
    })
  );
});

/**
 * Update Quiz
 */
export const updateQuiz = asyncHandler(async (req, res) => {
  const quiz = await updateQuizService(
    req.params.id,
    req.body,
    req.user.id
  );

  return res.status(200).json(
    new ApiResponse({
      message: Messages.QUIZ_UPDATED,
      data: quizPresenter(quiz),
    })
  );
});

/**
 * Update Quiz Status
 */
export const updateQuizStatus = asyncHandler(async (req, res) => {
  const quiz = await updateQuizStatusService(
    req.params.id,
    req.body.status,
    req.user.id
  );

  return res.status(200).json(
    new ApiResponse({
      message: Messages.QUIZ_STATUS_UPDATED,
      data: quizPresenter(quiz),
    })
  );
});

/**
 * Delete Quiz
 */
export const deleteQuiz = asyncHandler(async (req, res) => {
  await deleteQuizService(
    req.params.id,
    req.user.id
  );

  return res.status(200).json(
    new ApiResponse({
      message: Messages.QUIZ_DELETED,
    })
  );
});