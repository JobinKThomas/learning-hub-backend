import { Router } from "express";

import * as sectionController from "../controllers/section.controller.js";

import authMiddleware from "../../../../middleware/auth.middleware.js";
import authorize from "../../../../middleware/authorize.middleware.js";
import validate from "../../../../middleware/validate.middleware.js";

import Roles from "../../../../shared/constants/roles.js";

import {
  createSectionValidator,
  updateSectionValidator,
  updateSectionStatusValidator,
} from "../validators/section.validator.js";

const router = Router();

/**
 * Create Section
 */
router.post(
  "/",
  authMiddleware,
  authorize(Roles.ADMIN),
  createSectionValidator,
  validate,
  sectionController.createSection
);

/**
 * List Sections
 */
router.get(
  "/",
  authMiddleware,
  authorize(Roles.ADMIN),
  sectionController.listSections
);

/**
 * Get Section by Slug
 */
router.get(
  "/:slug",
  authMiddleware,
  authorize(Roles.ADMIN),
  sectionController.getSectionBySlug
);

/**
 * Update Section
 */
router.patch(
  "/:id",
  authMiddleware,
  authorize(Roles.ADMIN),
  updateSectionValidator,
  validate,
  sectionController.updateSection
);

/**
 * Update Section Status
 */
router.patch(
  "/:id/status",
  authMiddleware,
  authorize(Roles.ADMIN),
  updateSectionStatusValidator,
  validate,
  sectionController.updateSectionStatus
);

/**
 * Delete Section
 */
router.delete(
  "/:id",
  authMiddleware,
  authorize(Roles.ADMIN),
  sectionController.deleteSection
);

export default router;