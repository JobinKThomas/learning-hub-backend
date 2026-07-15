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
 * Public Routes
 */
router.get(
  "/modules/:moduleId/sections",
  sectionController.listSections
);

router.get(
  "/sections/:slug",
  sectionController.getSectionBySlug
);

/**
 * Admin Routes
 */
router.post(
  "/modules/:moduleId/sections",
  authMiddleware,
  authorize(Roles.ADMIN),
  createSectionValidator,
  validate,
  sectionController.createSection
);

router.put(
  "/sections/:id",
  authMiddleware,
  authorize(Roles.ADMIN),
  updateSectionValidator,
  validate,
  sectionController.updateSection
);

router.patch(
  "/sections/:id/status",
  authMiddleware,
  authorize(Roles.ADMIN),
  updateSectionStatusValidator,
  validate,
  sectionController.updateSectionStatus
);

router.delete(
  "/sections/:id",
  authMiddleware,
  authorize(Roles.ADMIN),
  sectionController.deleteSection
);

export default router;