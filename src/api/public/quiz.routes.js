import { Router } from "express";

import * as quizController from "./controllers/quiz.controller.js";

const router = Router();

/**
 * GET /api/public/quizzes/:slug
 */
router.get(
  "/:slug",
  quizController.getQuizBySlug
);

export default router;