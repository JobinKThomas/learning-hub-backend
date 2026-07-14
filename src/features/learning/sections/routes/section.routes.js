import { Router } from "express";

import * as sectionController from "../controllers/section.controller.js";

import authMiddleware from "../../../../middleware/auth.middleware.js";
import authorize from "../../../../middleware/authorize.middleware.js";
import validate from "../../../../middleware/validate.middleware.js";

import Roles from "../../../../shared/constants/roles.js";

import {
  createSectionValidator,
} from "../validators/section.validator.js";

const router = Router();

router.post(
  "/",
  authMiddleware,
  authorize(Roles.ADMIN),
  createSectionValidator,
  validate,
  sectionController.createSection
);

router.get(
  "/",
  authMiddleware,
  authorize(Roles.ADMIN),
  sectionController.listSections
);

router.get(
    "/:slug",
    authMiddleware,
    authorize(Roles.ADMIN),
    sectionController.getSection
);

export default router;