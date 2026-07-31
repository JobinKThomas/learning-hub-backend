import { Router } from "express";

import * as topicController from "../controllers/topic.controller.js";

import authMiddleware from "../../../../middleware/auth.middleware.js";
import authorize from "../../../../middleware/authorize.middleware.js";
import validate from "../../../../middleware/validate.middleware.js";

import Roles from "../../../../shared/constants/roles.js";

import {
  // createTopicValidator,
  updateTopicValidator,
  updateTopicStatusValidator,
} from "../validators/topic.validator.js";

const router = Router();

/**
 * Public
 */
router.get(
  "/",
  topicController.listTopics
);

router.get(
  "/:slug",
  topicController.getTopicBySlug
);

// /**
//  * Admin
//  */
// router.post(
//   "/",
//   authMiddleware,
//   authorize(Roles.ADMIN),
//   createTopicValidator,
//   validate,
//   topicController.createTopic
// );

router.put(
  "/:id",
  authMiddleware,
  authorize(Roles.ADMIN),
  updateTopicValidator,
  validate,
  topicController.updateTopic
);

router.patch(
  "/:id/status",
  authMiddleware,
  authorize(Roles.ADMIN),
  updateTopicStatusValidator,
  validate,
  topicController.updateTopicStatus
);

router.delete(
  "/:id",
  authMiddleware,
 authorize(Roles.ADMIN),
  topicController.deleteTopic
);

export default router;