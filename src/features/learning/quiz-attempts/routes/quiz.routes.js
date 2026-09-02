import { Router } from "express";

import * as quizController from "../controllers/quiz.controller.js";

import validate from "../../../../middleware/validate.middleware.js";
import { submitQuizValidator } from "../../../../features/learning/quiz-attempts/validators/quizAttempt.validator.js";

const router = Router();

/**
 * GET /api/public/quiz/:slug
 */
router.get(
  "/:slug",
  quizController.getQuizBySlug
);

/**
 * POST /api/public/quiz/:slug/submit
 */
router.post(
  "/:slug/submit",
  7,
  validate,
  quizController.submitQuiz
);

export default router;