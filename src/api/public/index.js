import { Router } from "express";

import learningPathRoutes from "./learningPath.routes.js";
import moduleRoutes from "./module.routes.js";
import sectionRoutes from "./section.routes.js";
import topicRoutes from "./topic.routes.js";
import searchRoutes from "./search.routes.js";
import noteRoutes from "./note.routes.js";
import resourceRoutes from "./resource.routes.js";
import playgroundRoutes from "./playground.routes.js";
import quizRoutes from "./quiz.routes.js";
import interviewQuestionRoutes from "./interviewQuestion.routes.js";
import searchRoutes from "./search.routes.js";

const router = Router();

/**
 * Learning Paths
 */
router.use(
  "/learning-paths",
  learningPathRoutes
);

/**
 * Modules
 */
router.use(
  "/modules",
  moduleRoutes
);

/**
 * Sections
 */
router.use(
  "/sections",
  sectionRoutes
);

/**
 * Topics
 */
router.use(
  "/topics",
  topicRoutes
);

/**
 * Search
 */
router.use(
  "/search",
  searchRoutes
);

/**
 * Notes
 */
router.use("/notes", noteRoutes);

/**
 * Resources
 */
router.use(
  "/resources",
  resourceRoutes
);

/**
 * Playground
 */
router.use(
  "/playgrounds",
  playgroundRoutes
);

/**
 * Quiz
 */
router.use("/quizzes", quizRoutes);

/**
 * Interview Questions
 */
router.use(
  "/interview-questions",
  interviewQuestionRoutes
);

/**
 * Search
 */
router.use("/search", searchRoutes);

export default router;