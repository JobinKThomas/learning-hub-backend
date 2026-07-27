import { Router } from "express";

import * as topicController from "./controllers/topic.controller.js";

const router = Router();

/**
 * GET /api/public/topics/:slug
 * Get published topic details by slug
 */
router.get(
  "/:slug",
  topicController.getTopicBySlug
);

export default router;