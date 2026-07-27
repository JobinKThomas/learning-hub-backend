import { Router } from "express";

import * as sectionController from "./controllers/section.controller.js";

const router = Router();

/**
 * GET /api/public/sections/:slug
 * Get published section by slug
 */
router.get(
  "/:slug",
  sectionController.getSectionBySlug
);

export default router;