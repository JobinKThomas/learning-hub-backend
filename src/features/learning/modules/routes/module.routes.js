import { Router } from "express";

import * as moduleController from "../controllers/module.controller.js";


const router = Router();

router.get(
"/learning-paths/:learningPathId/modules",
moduleController.listModules
);

router.get(
  "/modules/:slug",
  moduleController.getModuleBySlug
);

router.patch(
  "/modules/:id",
  authMiddleware,
  authorize(Roles.ADMIN),
  updateModuleValidator,
  validate,
  moduleController.updateModule
);