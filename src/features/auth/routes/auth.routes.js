import { Router } from "express";

import * as authController from "../controllers/auth.controller.js";

import {
  registerValidator,
  loginValidator
} from "../validators/auth.validator.js";

import validate from "../../../middleware/validate.middleware.js";
import authMiddleware from "../../../middleware/auth.middleware.js";

const router = Router();

router.post(
  "/register",
  registerValidator,
  validate,
  authController.register
);

router.post(
  "/login",
  loginValidator,
  validate,
  authController.login
);

router.post("/logout", authController.logout);

router.post("/refresh", authController.refresh);

router.get(
  "/me",
  authMiddleware,
  authController.me
);

export default router;