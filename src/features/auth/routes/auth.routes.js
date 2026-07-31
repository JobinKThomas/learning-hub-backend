import { Router } from "express";

import * as authController from "../controllers/auth.controller.js";

import {
  registerValidator,
  loginValidator,
  refreshValidator,
  logoutValidator,
} from "../validators/auth.validator.js";

import validate from "../../../middleware/validate.middleware.js";
import authMiddleware from "../../../middleware/auth.middleware.js";

const router = Router();

/**
 * Register
 */
router.post(
  "/register",
  registerValidator,
  validate,
  authController.register
);

/**
 * Login
 */
router.post(
  "/login",
  loginValidator,
  validate,
  authController.login
);

/**
 * Refresh Token
 */
router.post(
  "/refresh-token",
  refreshValidator,
  validate,
  authController.refresh
);

/**
 * Logout
 */
router.post(
  "/logout",
  logoutValidator,
  validate,
  authController.logout
);

/**
 * Current User
 */
router.get(
  "/me",
  authMiddleware,
  authController.me
);

export default router;