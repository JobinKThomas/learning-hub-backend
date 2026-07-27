import asyncHandler from "../../../middleware/asyncHandler.middleware.js";

import ApiResponse from "../../../shared/ApiResponse.js";
import { Messages } from "../../../shared/constants/messages.js";

import getNoteBySlugService from "../../../features/learning/notes/services/public/getNoteBySlug.service.js";

/**
 * Get Note by Slug
 */
export const getNoteBySlug = asyncHandler(
  async (req, res) => {
    const result = await getNoteBySlugService(
      req.params.slug
    );

    return res.status(200).json(
      new ApiResponse({
        message: Messages.NOTE_FETCHED,
        data: result,
      })
    );
  }
);