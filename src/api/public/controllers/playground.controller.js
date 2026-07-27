import asyncHandler from "../../../middleware/asyncHandler.middleware.js";

import ApiResponse from "../../../shared/ApiResponse.js";
import { Messages } from "../../../shared/constants/messages.js";

import getPlaygroundBySlugService from "../../../features/learning/playground/services/public/getPlaygroundBySlug.service.js";

export const getPlaygroundBySlug =
  asyncHandler(async (req, res) => {
    const result =
      await getPlaygroundBySlugService(
        req.params.slug
      );

    return res.status(200).json(
      new ApiResponse({
        message:
          Messages.PLAYGROUND_FETCHED,
        data: result,
      })
    );
  });