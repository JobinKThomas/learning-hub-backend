import { Router } from "express";

import * as sectionController from "../controllers/section.controller.js";

import authMiddleware from "../../../../middleware/auth.middleware.js";
import authorize from "../../../../middleware/authorize.middleware.js";
import validate from "../../../../middleware/validate.middleware.js";

import Roles from "../../../../shared/constants/roles.js";
import { createSectionValidator } from "../validators/section.validator.js";


const router = Router();

/**
 * Public Routes
 */
router.get(
  "/:moduleId/sections",
  sectionController.listSections
);

/**
 * Admin Routes
 */
router.post(
  "/:moduleId/sections",
  authMiddleware,
  authorize(Roles.ADMIN),
  createSectionValidator,
  validate,
  sectionController.createSection
);

export default router;
