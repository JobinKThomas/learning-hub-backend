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

// /**
//  * Public Routes
//  */
// router.get(
//   "/:moduleId/sections",
//   sectionController.listSections
// );

router.get(
  "/:slug",
  sectionController.getSectionBySlug
);

/**
 * Admin Routes
 */
// router.post(
//   "/:moduleId/sections",
//   authMiddleware,
//   authorize(Roles.ADMIN),
//   createSectionValidator,
//   validate,
//   sectionController.createSection
// );

router.put(
  "/:id",
  authMiddleware,
  authorize(Roles.ADMIN),
  updateSectionValidator,
  validate,
  sectionController.updateSection
);

router.patch(
  "/:id/status",
  authMiddleware,
  authorize(Roles.ADMIN),
  updateSectionStatusValidator,
  validate,
  sectionController.updateSectionStatus
);

router.delete(
  "/:id",
  authMiddleware,
  authorize(Roles.ADMIN),
  sectionController.deleteSection
);

export default router;