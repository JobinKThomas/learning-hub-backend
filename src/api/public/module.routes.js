import { Router } from "express";

import * as moduleController from "./controllers/module.controller.js";

const router = Router();

/**
 * GET /api/public/modules/:slug
 * Get published module by slug
 */
router.get(
  "/:slug",
  moduleController.getModuleBySlug
);

export default router;