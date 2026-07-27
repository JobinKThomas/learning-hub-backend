import { Router } from "express";

import * as interviewQuestionController from "./controllers/interviewQuestion.controller.js";

const router = Router();

/**
 * GET /api/public/interview-questions/:slug
 */
router.get(
  "/:slug",
  interviewQuestionController.getInterviewQuestionBySlug
);

export default router;