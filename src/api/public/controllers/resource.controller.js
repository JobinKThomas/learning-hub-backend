import asyncHandler from "../../../middleware/asyncHandler.middleware.js";

import ApiResponse from "../../../shared/ApiResponse.js";
import { Messages } from "../../../shared/constants/messages.js";

import getResourceBySlugService from "../../../features/learning/resources/services/public/getResourceBySlug.service.js";

export const getResourceBySlug =
  asyncHandler(async (req, res) => {
    const result =
      await getResourceBySlugService(
        req.params.slug
      );

    return res.status(200).json(
      new ApiResponse({
        message:
          Messages.RESOURCE_FETCHED,
        data: result,
      })
    );
  });