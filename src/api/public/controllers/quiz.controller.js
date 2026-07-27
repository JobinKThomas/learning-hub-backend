import asyncHandler from "../../../middleware/asyncHandler.middleware.js";

import ApiResponse from "../../../shared/ApiResponse.js";
import { Messages } from "../../../shared/constants/messages.js";

import getQuizBySlugService from "../../../features/learning/quizzes/services/public/getQuizBySlug.service.js";

export const getQuizBySlug =
  asyncHandler(async (req, res) => {
    const result =
      await getQuizBySlugService(
        req.params.slug
      );

    return res.status(200).json(
      new ApiResponse({
        message:
          Messages.QUIZ_FETCHED,
        data: result,
      })
    );
  });