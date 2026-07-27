import { Router } from "express";

import * as noteController from "./controllers/note.controller.js";

const router = Router();

/**
 * GET /api/public/notes/:slug
 * Get published note by slug
 */
router.get(
  "/:slug",
  noteController.getNoteBySlug
);

export default router;