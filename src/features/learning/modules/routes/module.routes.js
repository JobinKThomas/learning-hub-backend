// import { Router } from "express";

// import * as moduleController from "../controllers/module.controller.js";

// import authMiddleware from "../../../../middleware/auth.middleware.js";
// import authorize from "../../../../middleware/authorize.middleware.js";
// import validate from "../../../../middleware/validate.middleware.js";

// import Roles from "../../../../shared/constants/roles.js";

// import {
//   createModuleValidator,
//   updateModuleValidator,
//   updateModuleStatusValidator,
// } from "../validators/module.validator.js";

// const router = Router();

// /**
//  * Public Routes
//  */
// router.get(
//   "/:learningPathId/modules",
//   moduleController.listModules
// );

// router.get(
//   "/modules/:slug",
//   moduleController.getModuleBySlug
// );

// /**
//  * Admin Routes
//  */
// router.post(
//   "/:learningPathId/modules",
//   authMiddleware,
//   authorize(Roles.ADMIN),
//   createModuleValidator,
//   validate,
//   moduleController.createModule
// );

// router.put(
//   "/modules/:id",
//   authMiddleware,
//   authorize(Roles.ADMIN),
//   updateModuleValidator,
//   validate,
//   moduleController.updateModule
// );

// router.patch(
//   "/modules/:id/status",
//   authMiddleware,
//   authorize(Roles.ADMIN),
//   updateModuleStatusValidator,
//   validate,
//   moduleController.updateModuleStatus
// );

// router.delete(
//   "/modules/:id",
//   authMiddleware,
//   authorize(Roles.ADMIN),
//   moduleController.deleteModule
// );

// export default router;

import { Router } from "express";

import * as moduleController from "../controllers/module.controller.js";

import authMiddleware from "../../../../middleware/auth.middleware.js";
import authorize from "../../../../middleware/authorize.middleware.js";
import validate from "../../../../middleware/validate.middleware.js";

import Roles from "../../../../shared/constants/roles.js";

import {
  updateModuleValidator,
  updateModuleStatusValidator,
} from "../validators/module.validator.js";

const router = Router();

/**
 * Public
 */
router.get(
  "/:slug",
  moduleController.getModuleBySlug
);

/**
 * Admin
 */
router.put(
  "/:id",
  authMiddleware,
  authorize(Roles.ADMIN),
  updateModuleValidator,
  validate,
  moduleController.updateModule
);

router.patch(
  "/:id/status",
  authMiddleware,
  authorize(Roles.ADMIN),
  updateModuleStatusValidator,
  validate,
  moduleController.updateModuleStatus
);

router.delete(
  "/:id",
  authMiddleware,
  authorize(Roles.ADMIN),
  moduleController.deleteModule
);

export default router;