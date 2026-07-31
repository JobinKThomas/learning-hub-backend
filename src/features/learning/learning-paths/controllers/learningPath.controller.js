import asyncHandler from "../../../../middleware/asyncHandler.middleware.js";

import ApiResponse from "../../../../shared/ApiResponse.js";
import {Messages} from "../../../../shared/constants/messages.js";

import learningPathPresenter from "../presenters/learningPath.presenter.js";

import createLearningPathService from "../services/application/createLearningPath.service.js";
import listLearningPathsService from "../services/application/listLearningPaths.service.js";
import getLearningPathBySlugService from "../services/application/getLearningPathBySlug.service.js";
import updateLearningPathService from "../services/application/updateLearningPath.service.js";
import updateLearningPathStatusService from "../services/application/updateLearningPathStatus.service.js";
import deleteLearningPathService from "../services/application/deleteLearningPath.service.js";

/**
 * Create Learning Path
 */
export const createLearningPath = asyncHandler(
  async (req, res) => {
    const learningPath =
      await createLearningPathService(
        req.body,
        req.user.id
      );

    return res.status(201).json(
      new ApiResponse({
        message: Messages.LEARNING_PATH_CREATED,
        data: learningPathPresenter(
          learningPath
        ),
      })
    );
  }
);

/**
 * List Learning Paths
 */
export const listLearningPaths = asyncHandler(
  async (req, res) => {
    const result =
      await listLearningPathsService(
        req.query
      );

    return res.json(
      new ApiResponse({
        message: Messages.SUCCESS,
        data: {
          ...result,
          items: result.items.map(
            learningPathPresenter
          ),
        },
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

    return res.json(
      new ApiResponse({
        message: Messages.SUCCESS,
        data: learningPathPresenter(
          learningPath
        ),
      })
    );
  });

/**
 * Update Learning Path
 */
export const updateLearningPath =
  asyncHandler(async (req, res) => {
    const learningPath =
      await updateLearningPathService(
        req.params.id,
        req.body,
        req.user.id
      );

    return res.json(
      new ApiResponse({
        message:
          Messages.LEARNING_PATH_UPDATED,
        data: learningPathPresenter(
          learningPath
        ),
      })
    );
  });

/**
 * Update Learning Path Status
 */
export const updateLearningPathStatus =
  asyncHandler(async (req, res) => {
    const learningPath =
      await updateLearningPathStatusService(
        req.params.id,
        req.body.status,
        req.user.id
      );

    return res.json(
      new ApiResponse({
        message:
          Messages.LEARNING_PATH_UPDATED,
        data: learningPathPresenter(
          learningPath
        ),
      })
    );
  });

/**
 * Delete Learning Path
 */
export const deleteLearningPath =
  asyncHandler(async (req, res) => {
    await deleteLearningPathService(
      req.params.id,
      req.user.id
    );

    return res.json(
      new ApiResponse({
        message:
          Messages.LEARNING_PATH_DELETED,
      })
    );
  });