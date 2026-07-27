import { Router } from "express";

import * as resourceController from "./controllers/resource.controller.js";

const router = Router();

/**
 * GET /api/public/resources/:slug
 */
router.get(
  "/:slug",
  resourceController.getResourceBySlug
);

export default router;