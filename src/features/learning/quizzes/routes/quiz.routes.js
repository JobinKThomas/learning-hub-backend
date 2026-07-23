import { Router } from "express";

import * as quizController from "../controllers/quiz.controller.js";

import authMiddleware from "../../../../middleware/auth.middleware.js";
import authorize from "../../../../middleware/authorize.middleware.js";
import validate from "../../../../middleware/validate.middleware.js";

import Roles from "../../../../shared/constants/roles.js";

import {
  createQuizValidator,
  updateQuizValidator,
  updateQuizStatusValidator,
} from "../validators/quiz.validator.js";

const router = Router();

/**
 * Create Quiz
 */
router.post(
  "/",
  authMiddleware,
  authorize(Roles.ADMIN),
  createQuizValidator,
  validate,
  quizController.createQuiz
);

/**
 * List Quizzes
 */
router.get(
  "/",
  authMiddleware,
  authorize(Roles.ADMIN),
  quizController.listQuizzes
);

/**
 * Get Quiz by Slug
 */
router.get(
  "/:slug",
  authMiddleware,
  authorize(Roles.ADMIN),
  quizController.getQuizBySlug
);

/**
 * Update Quiz
 */
router.patch(
  "/:id",
  authMiddleware,
  authorize(Roles.ADMIN),
  updateQuizValidator,
  validate,
  quizController.updateQuiz
);

/**
 * Update Quiz Status
 */
router.patch(
  "/:id/status",
  authMiddleware,
  authorize(Roles.ADMIN),
  updateQuizStatusValidator,
  validate,
  quizController.updateQuizStatus
);

/**
 * Delete Quiz
 */
router.delete(
  "/:id",
  authMiddleware,
  authorize(Roles.ADMIN),
  quizController.deleteQuiz
);

export default router;