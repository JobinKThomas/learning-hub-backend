import { Router } from "express";

import * as moduleController from "../controllers/module.controller.js";

import authMiddleware from "../../../../middleware/auth.middleware.js";
import authorize from "../../../../middleware/authorize.middleware.js";
import validate from "../../../../middleware/validate.middleware.js";

import Roles from "../../../../shared/constants/roles.js";

import {
  createModuleValidator,
} from "../validators/module.validator.js";

const router = Router();

/**
 * Public
 */
router.get(
  "/:learningPathId/modules",
  moduleController.listModules
);

/**
 * Admin
 */
router.post(
  "/:learningPathId/modules",
  authMiddleware,
  authorize(Roles.ADMIN),
  createModuleValidator,
  validate,
  moduleController.createModule
);

export default router;