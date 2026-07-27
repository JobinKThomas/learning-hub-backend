import asyncHandler from "../../../middleware/asyncHandler.middleware.js";

import ApiResponse from "../../../shared/ApiResponse.js";
import { Messages } from "../../../shared/constants/messages.js";

import searchService from "../../../features/learning/search/services/public/search.service.js";

export const search = asyncHandler(
  async (req, res) => {
    const start = Date.now();

    const result = await searchService({
      search: req.query.q,
      limit: Number(req.query.limit) || 5,
    });

    result.took = Date.now() - start;

    return res.status(200).json(
      new ApiResponse({
        message: Messages.SEARCH_COMPLETED,
        data: result,
      })
    );
  }
);