import { Router } from "express";

import authRoutes from "../features/auth/routes/auth.routes.js";
import systemRoutes from "../features/system/routes/system.routes.js";

const router = Router();

router.use("/system", systemRoutes);
router.use("/auth", authRoutes);

export default router;