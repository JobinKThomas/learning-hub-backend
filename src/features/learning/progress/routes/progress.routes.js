// import { Router } from "express";

// import * as progressController from "../controllers/progress.controller.js";

// import authMiddleware from "../../../../middleware/auth.middleware.js";
// import authorize from "../../../../middleware/authorize.middleware.js";
// import validate from "../../../../middleware/validate.middleware.js";

// import {
//   topicProgressValidator,
//   moduleProgressValidator,
//   sectionProgressValidator,
// } from "../validators/progress.validator.js";

// import Roles from "../../../../shared/constants/roles.js";

// const router = Router();

// /**
//  * Complete Note
//  */
// router.post(
//   "/topics/:topicId/note/complete",
//   authMiddleware,
//   authorize(Roles.USER),
//   progressController.completeNoteProgress
// );

// /**
//  * Complete Resource
//  */
// router.post(
//   "/topics/:topicId/resource/complete",
//   authMiddleware,
//   authorize(Roles.USER),
//   progressController.completeResourceProgress
// );

// /**
//  * Complete Playground
//  */
// router.post(
//   "/topics/:topicId/playground/complete",
//   authMiddleware,
//   authorize(Roles.USER),
//   progressController.completePlaygroundProgress
// );

// /**
//  * Get user's progress for a topic
//  */
// router.get(
//   "/topic/:topicId",
//   authMiddleware,
//   authorize(Roles.USER, Roles.ADMIN),
//   topicProgressValidator,
//   validate,
//   progressController.getTopicProgress
// );

// /**
//  * Get user's progress for a module
//  */
// router.get(
//   "/module/:moduleId",
//   authMiddleware,
//   authorize(Roles.USER, Roles.ADMIN),
//   moduleProgressValidator,
//   validate,
//   progressController.getModuleProgress
// );

// /**
//  * Get user's progress for a section
//  */
// router.get(
//   "/section/:sectionId",
//   authMiddleware,
//   authorize(Roles.USER, Roles.ADMIN),
//   sectionProgressValidator,
//   validate,
//   progressController.getSectionProgress
// );

// export default router;

import { Router } from "express";

import * as progressController from "../controllers/progress.controller.js";

import authMiddleware from "../../../../middleware/auth.middleware.js";
import {
  completeTopicContentValidator,
} from "../validators/progress.validator.js";

const router = Router();

/**
 * Complete content inside a topic
 *
 * POST /api/progress/topics/:topicId/complete
 */
router.post(
  "/topics/:topicId/complete",
  authMiddleware,
  completeTopicContentValidator,
  validate,
  progressController.completeTopicContent
);

/**
 * Get topic progress
 *
 * GET /api/progress/topics/:topicId
 */
router.get(
  "/topics/:topicId",
  authMiddleware,
  progressController.getTopicProgress
);

/**
 * Section Progress
 */
router.get(
  "/sections/:sectionId",
  authMiddleware,
  progressController.getSectionProgressController
);

/**
 * Module Progress
 */
router.get(
  "/modules/:moduleId",
  authMiddleware,
  progressController.getModuleProgressController
);

/**
 * Learning Path Progress
 */
router.get(
  "/learning-paths/:learningPathId",
  authMiddleware,
  progressController.getLearningPathProgressController
);

/**
 * Get progress dashboard
 *
 * GET /api/progress/dashboard
 */
router.get(
  "/dashboard",
  authMiddleware,
  progressController.getProgressDashboardController
);

/**
 * Get continue learning
 */
router.get(
  "/continue",
  authMiddleware,
  progressController.getContinueLearningController
);

/**
 * Complete topic content
 *
 * POST /api/progress/topics/:topicId/complete
 */
router.post(
  "/topics/:topicId/complete",
  authMiddleware,
  completeTopicValidator,
  validate,
  progressController.completeTopicContentController
);

export default router;