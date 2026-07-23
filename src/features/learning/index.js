import { Router } from "express";

import learningPathRoutes from "./learning-paths/routes/learningPath.routes.js";
import moduleRoutes from "./modules/routes/module.routes.js";
import sectionRoutes from "./sections/routes/section.routes.js";
import resourceRoutes from "./resources/routes/resource.routes.js";
import playgroundRoutes from "./playground/routes/playground.routes.js";
import quizRoutes from "./quizzes/routes/quiz.routes.js";

const router = Router();

router.use(
  "/learning-paths",
  learningPathRoutes
);

router.use(
  "/modules",
  moduleRoutes
);

router.use(
  "/sections",
  sectionRoutes
);

router.use(
  "/resources",
  resourceRoutes
);

router.use(
  "/playgrounds",
  playgroundRoutes
);

router.use("/quizzes", quizRoutes);

export default router;