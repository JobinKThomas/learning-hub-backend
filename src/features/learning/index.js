import { Router } from "express";
import learningPathRoutes from "./learning-paths/routes/learningPath.routes.js";

const router = Router();

router.use("/learning-paths", learningPathRoutes);

export default router;