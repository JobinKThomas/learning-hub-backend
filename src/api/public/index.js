import { Router } from "express";

import learningPathRoutes from "./learningPath.routes.js";
import moduleRoutes from "./module.routes.js";
import sectionRoutes from "./section.routes.js";
import topicRoutes from "./topic.routes.js";
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

export default router;