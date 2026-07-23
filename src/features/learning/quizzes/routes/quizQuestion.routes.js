import { Router } from "express";

import * as questionController from "../controllers/quizQuestion.controller.js";

import authMiddleware from "../../../../middleware/auth.middleware.js";
import authorize from "../../../../middleware/authorize.middleware.js";
import validate from "../../../../middleware/validate.middleware.js";

import Roles from "../../../../shared/constants/roles.js";

import {
  createQuestionValidator,
  updateQuestionValidator,
} from "../validators/quizQuestion.validator.js";

const router = Router();

/**
 * Create Question
 */
router.post(
  "/",
  authMiddleware,
  authorize(Roles.ADMIN),
  createQuestionValidator,
  validate,
  questionController.createQuestion
);

/**
 * List Questions
 */
router.get(
  "/",
  authMiddleware,
  authorize(Roles.ADMIN),
  questionController.listQuestions
);

/**
 * Get Question by ID
 */
router.get(
  "/:id",
  authMiddleware,
  authorize(Roles.ADMIN),
  questionController.getQuestionById
);

/**
 * Update Question
 */
router.patch(
  "/:id",
  authMiddleware,
  authorize(Roles.ADMIN),
  updateQuestionValidator,
  validate,
  questionController.updateQuestion
);

/**
 * Delete Question
 */
router.delete(
  "/:id",
  authMiddleware,
  authorize(Roles.ADMIN),
  questionController.deleteQuestion
);

export default router;