import { Router } from "express";

import * as playgroundController from "./controllers/playground.controller.js";

const router = Router();

/**
 * GET /api/public/playgrounds/:slug
 */
router.get(
  "/:slug",
  playgroundController.getPlaygroundBySlug
);

export default router;