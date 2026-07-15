import { body } from "express-validator";

import ContentStatus from "../../../../shared/enums/contentStatus.enum.js";
import Visibility from "../../../../shared/enums/visibility.enum.js";
import SubscriptionType from "../../../../shared/enums/subscription.enum.js";

export const createTopicValidator = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required.")
    .isLength({
      min: 3,
      max: 100,
    })
    .withMessage(
      "Title must be between 3 and 100 characters."
    ),

  body("learningPath")
    .notEmpty()
    .withMessage(
      "Learning Path is required."
    )
    .isMongoId()
    .withMessage(
      "Invalid Learning Path ID."
    ),

  body("module")
    .notEmpty()
    .withMessage(
      "Module is required."
    )
    .isMongoId()
    .withMessage(
      "Invalid Module ID."
    ),

  body("section")
    .notEmpty()
    .withMessage(
      "Section is required."
    )
    .isMongoId()
    .withMessage(
      "Invalid Section ID."
    ),

  body("shortDescription")
    .optional()
    .isLength({
      max: 250,
    }),

  body("description")
    .optional()
    .isString(),

  body("estimatedMinutes")
    .optional()
    .isInt({
      min: 0,
    }),

  body("visibility")
    .optional()
    .isIn(
      Object.values(
        Visibility
      )
    ),

  body("subscriptionType")
    .optional()
    .isIn(
      Object.values(
        SubscriptionType
      )
    ),

  body("order")
    .optional()
    .isInt({
      min: 0,
    }),

  body("tags")
    .optional()
    .isArray(),
];

export const updateTopicValidator = [
  body("title")
    .optional()
    .trim()
    .isLength({
      min: 3,
      max: 100,
    }),

  body("learningPath")
    .optional()
    .isMongoId(),

  body("module")
    .optional()
    .isMongoId(),

  body("section")
    .optional()
    .isMongoId(),

  body("estimatedMinutes")
    .optional()
    .isInt({
      min: 0,
    }),

  body("visibility")
    .optional()
    .isIn(
      Object.values(
        Visibility
      )
    ),

  body("subscriptionType")
    .optional()
    .isIn(
      Object.values(
        SubscriptionType
      )
    ),

  body("order")
    .optional()
    .isInt({
      min: 0,
    }),

  body("tags")
    .optional()
    .isArray(),
];

export const updateTopicStatusValidator = [
  body("status")
    .notEmpty()
    .withMessage(
      "Status is required."
    )
    .isIn(
      Object.values(
        ContentStatus
      )
    )
    .withMessage(
      "Invalid status."
    ),
];