import { Router } from "express";

import * as learningPathController from "./controllers/learningPath.controller.js";

const router = Router();

/**
 * GET /api/public/learning-paths
 * List all published learning paths
 */
router.get(
  "/",
  learningPathController.getLearningPaths
);

/**
 * GET /api/public/learning-paths/:slug
 * Get a published learning path by slug
 */
router.get(
  "/:slug",
  learningPathController.getLearningPathBySlug
);

export default router;