import { Router } from "express";

import learningPathRoutes from "./learning-paths/routes/learningPath.routes.js";
import moduleRoutes from "./modules/routes/module.routes.js";
import sectionRoutes from "./sections/routes/section.routes.js";

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

export default router;