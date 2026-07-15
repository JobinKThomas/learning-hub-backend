import { Router } from "express";

import * as learningPathController from "../controllers/learningPath.controller.js";

import authMiddleware from "../../../../middleware/auth.middleware.js";
import authorize from "../../../../middleware/authorize.middleware.js";
import validate from "../../../../middleware/validate.middleware.js";

import Roles from "../../../../shared/constants/roles.js";

import {
  createLearningPathValidator,
  updateLearningPathValidator,
  updateLearningPathStatusValidator,
} from "../validators/learningPath.validator.js";

const router = Router();

/**
 * Public Routes
 */
router.get(
  "/",
  learningPathController.listLearningPaths
);

router.get(
  "/:slug",
  learningPathController.getLearningPathBySlug
);

/**
 * Admin Routes
 */
router.post(
  "/",
  authMiddleware,
  authorize(Roles.ADMIN),
  createLearningPathValidator,
  validate,
  learningPathController.createLearningPath
);

router.put(
  "/:id",
  authMiddleware,
  authorize(Roles.ADMIN),
  updateLearningPathValidator,
  validate,
  learningPathController.updateLearningPath
);

router.patch(
  "/:id/status",
  authMiddleware,
  authorize(Roles.ADMIN),
  updateLearningPathStatusValidator,
  validate,
  learningPathController.updateLearningPathStatus
);

router.delete(
  "/:id",
  authMiddleware,
  authorize(Roles.ADMIN),
  learningPathController.deleteLearningPath
);

export default router;