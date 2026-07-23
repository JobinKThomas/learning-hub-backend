import { Router } from "express";

import * as interviewQuestionController from "../controllers/interviewQuestion.controller.js";

import authMiddleware from "../../../../middleware/auth.middleware.js";
import authorize from "../../../../middleware/authorize.middleware.js";
import validate from "../../../../middleware/validate.middleware.js";

import Roles from "../../../../shared/constants/roles.js";

import {
  createInterviewQuestionValidator,
  updateInterviewQuestionValidator,
  updateInterviewQuestionStatusValidator,
} from "../validators/interviewQuestion.validator.js";

const router = Router();

/**
 * Create Interview Question
 */
router.post(
  "/",
  authMiddleware,
  authorize(Roles.ADMIN),
  createInterviewQuestionValidator,
  validate,
  interviewQuestionController.createInterviewQuestion
);

/**
 * List Interview Questions
 */
router.get(
  "/",
  authMiddleware,
  authorize(Roles.ADMIN),
  interviewQuestionController.listInterviewQuestions
);

/**
 * Get Interview Question by ID
 */
router.get(
  "/:id",
  authMiddleware,
  authorize(Roles.ADMIN),
  interviewQuestionController.getInterviewQuestionById
);

/**
 * Update Interview Question
 */
router.patch(
  "/:id",
  authMiddleware,
  authorize(Roles.ADMIN),
  updateInterviewQuestionValidator,
  validate,
  interviewQuestionController.updateInterviewQuestion
);

/**
 * Update Interview Question Status
 */
router.patch(
  "/:id/status",
  authMiddleware,
  authorize(Roles.ADMIN),
  updateInterviewQuestionStatusValidator,
  validate,
  interviewQuestionController.updateInterviewQuestionStatus
);

/**
 * Delete Interview Question
 */
router.delete(
  "/:id",
  authMiddleware,
  authorize(Roles.ADMIN),
  interviewQuestionController.deleteInterviewQuestion
);

export default router;