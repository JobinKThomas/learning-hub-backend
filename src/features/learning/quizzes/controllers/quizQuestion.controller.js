import asyncHandler from "../../../../middleware/asyncHandler.middleware.js";

import ApiResponse from "../../../../shared/ApiResponse.js";
import Messages from "../../../../shared/constants/messages.js";

import questionPresenter from "../presenters/quizQuestion.presenter.js";

import createQuestionService from "../services/application/question/createQuestion.service.js";
import listQuestionsService from "../services/application/question/listQuestions.service.js";
import getQuestionByIdService from "../services/application/question/getQuestionById.service.js";
import updateQuestionService from "../services/application/question/updateQuestion.service.js";
import deleteQuestionService from "../services/application/question/deleteQuestion.service.js";

/**
 * Create Question
 */
export const createQuestion = asyncHandler(async (req, res) => {
  const question = await createQuestionService(
    req.body,
    req.user.id
  );

  return res.status(201).json(
    new ApiResponse({
      message: Messages.QUESTION_CREATED,
      data: questionPresenter(question),
    })
  );
});

/**
 * List Questions
 */
export const listQuestions = asyncHandler(async (req, res) => {
  const result = await listQuestionsService(req.query);

  return res.status(200).json(
    new ApiResponse({
      data: result,
    })
  );
});

/**
 * Get Question by ID
 */
export const getQuestionById = asyncHandler(async (req, res) => {
  const question = await getQuestionByIdService(
    req.params.id
  );

  return res.status(200).json(
    new ApiResponse({
      data: questionPresenter(question),
    })
  );
});

/**
 * Update Question
 */
export const updateQuestion = asyncHandler(async (req, res) => {
  const question = await updateQuestionService(
    req.params.id,
    req.body,
    req.user.id
  );

  return res.status(200).json(
    new ApiResponse({
      message: Messages.QUESTION_UPDATED,
      data: questionPresenter(question),
    })
  );
});

/**
 * Delete Question
 */
export const deleteQuestion = asyncHandler(async (req, res) => {
  await deleteQuestionService(
    req.params.id,
    req.user.id
  );

  return res.status(200).json(
    new ApiResponse({
      message: Messages.QUESTION_DELETED,
    })
  );
});