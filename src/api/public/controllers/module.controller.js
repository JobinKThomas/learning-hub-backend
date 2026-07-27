import asyncHandler from "../../../middleware/asyncHandler.middleware.js";

import ApiResponse from "../../../shared/ApiResponse.js";
import { Messages } from "../../../shared/constants/messages.js";

import getModuleBySlugService from "../../../features/learning/modules/services/public/getModuleBySlug.service.js";

/**
 * Get Module by Slug
 */
export const getModuleBySlug = asyncHandler(
  async (req, res) => {
    const result = await getModuleBySlugService(
      req.params.slug
    );

    return res.status(200).json(
      new ApiResponse({
        message: Messages.MODULE_FETCHED,
        data: result,
      })
    );
  }
);