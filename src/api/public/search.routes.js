import { Router } from "express";

import * as searchController from "./controllers/search.controller.js";

const router = Router();

/**
 * GET /api/public/search
 */
router.get("/", searchController.search);

export default router;