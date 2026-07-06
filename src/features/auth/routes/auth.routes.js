import { Router } from "express";

import * as authController from "../controllers/auth.controller.js";

import {
  registerValidator,
} from "../validators/auth.validator.js";

import validate from "../../../middleware/validate.middleware.js";


const router = Router();

router.post(
  "/register",
  registerValidator,
  validate,
  authController.register
);

router.post("/login", authController.login);

router.post("/logout", authController.logout);

router.post("/refresh", authController.refresh);

router.get("/me", authController.me);

export default router;