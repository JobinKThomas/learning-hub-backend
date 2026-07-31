import { Router } from "express";

import * as topicController from "../controllers/topic.controller.js";

import authMiddleware from "../../../../middleware/auth.middleware.js";
import authorize from "../../../../middleware/authorize.middleware.js";
import validate from "../../../../middleware/validate.middleware.js";

import Roles from "../../../../shared/constants/roles.js";
import {
  createTopicValidator,
} from "../validators/topic.validator.js";

const router = Router();

router.post(
  "/:sectionId/topics",
  authMiddleware,
  authorize(Roles.ADMIN),
  createTopicValidator,
  validate,
  topicController.createTopic
);

// router.get(
//   "/:sectionId/topics",
//   topicController.listTopics
// );

export default router;