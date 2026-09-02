import { Router } from "express";

import * as playgroundController from "../controllers/playground.controller.js";

import authMiddleware from "../../../../middleware/auth.middleware.js";
import authorize from "../../../../middleware/authorize.middleware.js";
import validate from "../../../../middleware/validate.middleware.js";

import Roles from "../../../../shared/constants/roles.js";

import {
  createPlaygroundValidator,
  updatePlaygroundValidator,
  updatePlaygroundStatusValidator,
} from "../validators/playground.validator.js";

const router = Router();

/**
 * Create Playground
 */
router.post(
  "/",
  authMiddleware,
  authorize(Roles.ADMIN),
  createPlaygroundValidator,
  validate,
  playgroundController.createPlayground
);

/**
 * List Playgrounds
 */
router.get(
  "/",
  authMiddleware,
  authorize(Roles.ADMIN),
  playgroundController.listPlaygrounds
);

/**
 * Get Playground by Slug
 */
router.get(
  "/:slug",
  authMiddleware,
  authorize(Roles.ADMIN),
  playgroundController.getPlaygroundBySlug
);

/**
 * Complete Playground
 */
export const completePlayground = asyncHandler(
  async (req, res) => {
    const progress =
      await completePlaygroundService({
        playgroundId: req.params.id,
        userId: req.user.id,
      });

    return res.status(200).json(
      new ApiResponse({
        message: Messages.SUCCESS,
        data: progressPresenter(progress),
      })
    );
  }
);

/**
 * Update Playground
 */
router.patch(
  "/:id",
  authMiddleware,
  authorize(Roles.ADMIN),
  updatePlaygroundValidator,
  validate,
  playgroundController.updatePlayground
);

/**
 * Update Playground Status
 */
router.patch(
  "/:id/status",
  authMiddleware,
  authorize(Roles.ADMIN),
  updatePlaygroundStatusValidator,
  validate,
  playgroundController.updatePlaygroundStatus
);

/**
 * Delete Playground
 */
router.delete(
  "/:id",
  authMiddleware,
  authorize(Roles.ADMIN),
  playgroundController.deletePlayground
);

export default router;