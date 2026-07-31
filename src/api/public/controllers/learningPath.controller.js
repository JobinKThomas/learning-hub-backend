import asyncHandler from "../../../middleware/asyncHandler.middleware.js";

import ApiResponse from "../../../shared/ApiResponse.js";
import {Messages} from "../../../shared/constants/messages.js";

import getLearningPathsService from "../../../features/learning/learning-paths/services/public/getLearningPathBySlug.service.js";
import getLearningPathBySlugService from "../../../features/learning/learning-paths/services/public/getLearningPaths.service.js";

/**
 * Get Learning Paths
 */
export const getLearningPaths = asyncHandler(
  async (req, res) => {
    const result =
      await getLearningPathsService(req.query);

    return res.status(200).json(
      new ApiResponse({
        message:
          Messages.LEARNING_PATHS_FETCHED,
        data: result,
      })
    );
  }
);

/**
 * Get Learning Path by Slug
 */
export const getLearningPathBySlug =
  asyncHandler(async (req, res) => {
    const learningPath =
      await getLearningPathBySlugService(
        req.params.slug
      );

    return res.status(200).json(
      new ApiResponse({
        message:
          Messages.LEARNING_PATH_FETCHED,
        data: learningPath,
      })
    );
  });