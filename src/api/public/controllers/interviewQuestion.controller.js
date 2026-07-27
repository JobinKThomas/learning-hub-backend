import asyncHandler from "../../../middleware/asyncHandler.middleware.js";

import ApiResponse from "../../../shared/ApiResponse.js";
import { Messages } from "../../../shared/constants/messages.js";

import getInterviewQuestionBySlugService from "../../../features/learning/interview-questions/services/public/getInterviewQuestionBySlug.service.js";

export const getInterviewQuestionBySlug =
  asyncHandler(async (req, res) => {
    const result =
      await getInterviewQuestionBySlugService(
        req.params.slug
      );

    return res.status(200).json(
      new ApiResponse({
        message:
          Messages.INTERVIEW_QUESTION_FETCHED,
        data: result,
      })
    );
  });