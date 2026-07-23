import asyncHandler from "../../../../middleware/asyncHandler.middleware.js";

import ApiResponse from "../../../../shared/ApiResponse.js";
import Messages from "../../../../shared/constants/messages.js";

import interviewQuestionPresenter from "../presenters/interviewQuestion.presenter.js";

import createInterviewQuestionService from "../services/application/createInterviewQuestion.service.js";
import listInterviewQuestionsService from "../services/application/listInterviewQuestions.service.js";
import getInterviewQuestionByIdService from "../services/application/getInterviewQuestionById.service.js";
import updateInterviewQuestionService from "../services/application/updateInterviewQuestion.service.js";
import updateInterviewQuestionStatusService from "../services/application/updateInterviewQuestionStatus.service.js";
import deleteInterviewQuestionService from "../services/application/deleteInterviewQuestion.service.js";

/**
 * Create Interview Question
 */
export const createInterviewQuestion = asyncHandler(
  async (req, res) => {
    const interviewQuestion =
      await createInterviewQuestionService(
        req.body,
        req.user.id
      );

    return res.status(201).json(
      new ApiResponse({
        message: Messages.INTERVIEW_QUESTION_CREATED,
        data: interviewQuestionPresenter(
          interviewQuestion
        ),
      })
    );
  }
);

/**
 * List Interview Questions
 */
export const listInterviewQuestions = asyncHandler(
  async (req, res) => {
    const result =
      await listInterviewQuestionsService(
        req.query
      );

    return res.status(200).json(
      new ApiResponse({
        data: result,
      })
    );
  }
);

/**
 * Get Interview Question by ID
 */
export const getInterviewQuestionById =
  asyncHandler(async (req, res) => {
    const interviewQuestion =
      await getInterviewQuestionByIdService(
        req.params.id
      );

    return res.status(200).json(
      new ApiResponse({
        data: interviewQuestionPresenter(
          interviewQuestion
        ),
      })
    );
  });

/**
 * Update Interview Question
 */
export const updateInterviewQuestion =
  asyncHandler(async (req, res) => {
    const interviewQuestion =
      await updateInterviewQuestionService(
        req.params.id,
        req.body,
        req.user.id
      );

    return res.status(200).json(
      new ApiResponse({
        message:
          Messages.INTERVIEW_QUESTION_UPDATED,
        data: interviewQuestionPresenter(
          interviewQuestion
        ),
      })
    );
  });

/**
 * Update Interview Question Status
 */
export const updateInterviewQuestionStatus =
  asyncHandler(async (req, res) => {
    const interviewQuestion =
      await updateInterviewQuestionStatusService(
        req.params.id,
        req.body.status,
        req.user.id
      );

    return res.status(200).json(
      new ApiResponse({
        message:
          Messages.INTERVIEW_QUESTION_STATUS_UPDATED,
        data: interviewQuestionPresenter(
          interviewQuestion
        ),
      })
    );
  });

/**
 * Delete Interview Question
 */
export const deleteInterviewQuestion =
  asyncHandler(async (req, res) => {
    await deleteInterviewQuestionService(
      req.params.id,
      req.user.id
    );

    return res.status(200).json(
      new ApiResponse({
        message:
          Messages.INTERVIEW_QUESTION_DELETED,
      })
    );
  });