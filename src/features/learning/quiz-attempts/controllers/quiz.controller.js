import asyncHandler from "../../../../middleware/asyncHandler.middleware.js";

import ApiResponse from "../../../../shared/ApiResponse.js";
import { Messages } from "../../../../shared/constants/messages.js";

import getQuizBySlugService from "../../../../features/learning/quizzes/services/public/getQuizBySlug.service.js";
import submitQuizService from "../../../../features/learning/quiz-attempts/services/submitQuiz.service.js";
import getQuizAttemptService from "../../quiz-attempts/services/getQuizAttempt.service.js";

/**
 * GET /api/public/quizzes/:slug
 * Get published quiz with questions
 */
export const getQuizBySlug = asyncHandler(
  async (req, res) => {
    const result = await getQuizBySlugService(
      req.params.slug
    );

    return res.status(200).json(
      new ApiResponse({
        message: Messages.QUIZ_FETCHED,
        data: result,
      })
    );
  }
);

/**
 * POST /api/public/quizzes/:slug/submit
 * Submit quiz answers
 */
export const submitQuiz = asyncHandler(
  async (req, res) => {
    const result = await submitQuizService({
      slug: req.params.slug,
      user: req.user?.id ?? null,
      answers: req.body.answers,
      ipAddress: req.ip,
      userAgent: req.get("user-agent") || "",
    });

    return res.status(200).json(
      new ApiResponse({
        message: Messages.QUIZ_SUBMITTED,
        data: result,
      })
    );
  }
);

export const getQuizAttempt =
  asyncHandler(async (req, res) => {
    const result =
      await getQuizAttemptService(
        req.params.id
      );

    return res.status(200).json(
      new ApiResponse({
        message:
          Messages.SUCCESS,
        data: result,
      })
    );
  });