import { Router } from "express";

import * as resourceController from "../controllers/resource.controller.js";

import authMiddleware from "../../../../middleware/auth.middleware.js";
import authorize from "../../../../middleware/authorize.middleware.js";
import validate from "../../../../middleware/validate.middleware.js";

import Roles from "../../../../shared/constants/roles.js";

import {
  createResourceValidator,
  updateResourceValidator,
  updateResourceStatusValidator,
} from "../validators/resource.validator.js";

const router = Router();

/**
 * Create Resource
 */
router.post(
  "/",
  authMiddleware,
  authorize(Roles.ADMIN),
  createResourceValidator,
  validate,
  resourceController.createResource
);

/**
 * List Resources
 */
router.get(
  "/",
  authMiddleware,
  authorize(Roles.ADMIN),
  resourceController.listResources
);

/**
 * Get Resource by Slug
 */
router.get(
  "/:slug",
  authMiddleware,
  authorize(Roles.ADMIN),
  resourceController.getResourceBySlug
);

/**
 * Complete Resource
 */
router.post(
  "/:id/complete",
  authMiddleware,
  resourceController.completeResource
);

/**
 * Update Resource
 */
router.patch(
  "/:id",
  authMiddleware,
  authorize(Roles.ADMIN),
  updateResourceValidator,
  validate,
  resourceController.updateResource
);

/**
 * Update Resource Status
 */
router.patch(
  "/:id/status",
  authMiddleware,
  authorize(Roles.ADMIN),
  updateResourceStatusValidator,
  validate,
  resourceController.updateResourceStatus
);

/**
 * Delete Resource
 */
router.delete(
  "/:id",
  authMiddleware,
  authorize(Roles.ADMIN),
  resourceController.deleteResource
);

export default router;