import asyncHandler from "../../../middleware/asyncHandler.middleware.js";

import ApiResponse from "../../../shared/ApiResponse.js";
import { Messages } from "../../../shared/constants/messages.js";

import getTopicBySlugService from "../../../features/learning/topics/services/public/getTopicBySlug.service.js";

/**
 * Get Topic by Slug
 */
export const getTopicBySlug = asyncHandler(
  async (req, res) => {
    const result = await getTopicBySlugService(
      req.params.slug
    );

    return res.status(200).json(
      new ApiResponse({
        message: Messages.TOPIC_FETCHED,
        data: result,
      })
    );
  }
);