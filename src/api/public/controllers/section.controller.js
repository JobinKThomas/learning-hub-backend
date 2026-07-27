import asyncHandler from "../../../middleware/asyncHandler.middleware.js";

import ApiResponse from "../../../shared/ApiResponse.js";
import { Messages } from "../../../shared/constants/messages.js";

import getSectionBySlugService from "../../../features/learning/sections/services/public/getSectionBySlug.service.js";

/**
 * Get Section by Slug
 */
export const getSectionBySlug = asyncHandler(
  async (req, res) => {
    const result = await getSectionBySlugService(
      req.params.slug
    );

    return res.status(200).json(
      new ApiResponse({
        message: Messages.SECTION_FETCHED,
        data: result,
      })
    );
  }
);