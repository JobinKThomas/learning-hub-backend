import { Router } from "express";

import * as noteController from "../controllers/note.controller.js";

import authMiddleware from "../../../../middleware/auth.middleware.js";
import authorize from "../../../../middleware/authorize.middleware.js";
import validate from "../../../../middleware/validate.middleware.js";

import Roles from "../../../../shared/constants/roles.js";

import {
  createNoteValidator,
  updateNoteValidator,
  updateNoteStatusValidator,
} from "../validators/note.validator.js";

const router = Router();

// Public
router.get("/", noteController.listNotes);

router.get("/:slug", noteController.getNoteBySlug);

// Admin

/**
 * Create Note
 */
router.post(
  "/",
  authMiddleware,
  authorize(Roles.ADMIN),
  createNoteValidator,
  validate,
  noteController.createNote
);

/**
 * Update Note
 */
router.patch(
  "/:id",
  authMiddleware,
  authorize(Roles.ADMIN),
  updateNoteValidator,
  validate,
  noteController.updateNote
);

/**
 * Update Note Status
 */
router.patch(
  "/:id/status",
  authMiddleware,
  authorize(Roles.ADMIN),
  updateNoteStatusValidator,
  validate,
  noteController.updateNoteStatus
);

/**
 * Delete Note
 */
router.delete(
  "/:id",
  authMiddleware,
  authorize(Roles.ADMIN),
  noteController.deleteNote
);

export default router;