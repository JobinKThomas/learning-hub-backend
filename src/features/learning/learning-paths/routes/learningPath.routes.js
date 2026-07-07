import { Router } from "express";

import * as learningPathController from "../controllers/learningPath.controller.js";

import authMiddleware from "../../../../middleware/auth.middleware.js";
import authorize from "../../../../middleware/authorize.middleware.js";
import validate from "../../../../middleware/validate.middleware.js";

import Roles from "../../../../shared/constants/roles.js";

import {
  createLearningPathValidator,
  updateLearningPathValidator,
} from "../validators/learningPath.validator.js";

const router = Router();

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

router.delete(
  "/:id",
  authMiddleware,
  authorize(Roles.ADMIN),
  learningPathController.deleteLearningPath
);

router.patch(
  "/:id/publish",
  authMiddleware,
  authorize(Roles.ADMIN),
  learningPathController.publishLearningPath
);

router.patch(
  "/:id/archive",
  authMiddleware,
  authorize(Roles.ADMIN),
  learningPathController.archiveLearningPath
);

/**
 * Public Routes
 */

router.get(
  "/",
  learningPathController.getLearningPaths
);

router.get(
  "/:slug",
  learningPathController.getLearningPathBySlug
);

router.patch(
  "/:id/status",
  authMiddleware,
  authorize(Roles.ADMIN),
  updateLearningPathStatusValidator,
  validate,
  learningPathController.updateLearningPathStatus
);

export default router;