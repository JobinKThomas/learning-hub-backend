import { Router } from "express";

import * as quizController from "../controllers/quiz.controller.js";

import validate from "../../../../middleware/validate.middleware.js";
import { submitQuizValidator } from "../../../../features/learning/quiz-attempts/validators/quizAttempt.validator.js";

const router = Router();

/**
 * GET /api/public/quizzes/:slug
 */
router.get(
  "/:slug",
  quizController.getQuizBySlug
);

/**
 * POST /api/public/quizzes/:slug/submit
 */
router.post(
  "/:slug/submit",
  submitQuizValidator,
  validate,
  quizController.submitQuiz
);

export default router;