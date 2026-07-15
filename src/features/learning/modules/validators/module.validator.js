import { body } from "express-validator";

import Difficulty from "../../../../shared/enums/difficulty.enum.js";
import Visibility from "../../../../shared/enums/visibility.enum.js";
import SubscriptionType from "../../../../shared/enums/subscription.enum.js";
import ContentStatus from "../../../../shared/enums/contentStatus.enum.js";

/**
 * Create Module
 */
export const createModuleValidator = [
  body("learningPath")
    .notEmpty()
    .withMessage("Learning Path is required.")
    .isMongoId()
    .withMessage("Invalid Learning Path ID."),

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

  body("description")
    .optional()
    .isString()
    .withMessage(
      "Description must be a string."
    ),

  body("difficulty")
    .optional()
    .isIn(Object.values(Difficulty))
    .withMessage("Invalid difficulty."),

  body("visibility")
    .optional()
    .isIn(Object.values(Visibility))
    .withMessage("Invalid visibility."),

  body("subscriptionType")
    .optional()
    .isIn(Object.values(SubscriptionType))
    .withMessage(
      "Invalid subscription type."
    ),

  body("estimatedHours")
    .optional()
    .isFloat({
      min: 0,
    })
    .withMessage(
      "Estimated hours must be 0 or greater."
    ),

  body("estimatedSections")
    .optional()
    .isInt({
      min: 0,
    })
    .withMessage(
      "Estimated sections must be 0 or greater."
    ),

  body("estimatedNotes")
    .optional()
    .isInt({
      min: 0,
    })
    .withMessage(
      "Estimated notes must be 0 or greater."
    ),

  body("order")
    .optional()
    .isInt({
      min: 0,
    })
    .withMessage(
      "Order must be 0 or greater."
    ),
];

/**
 * Update Module
 */
export const updateModuleValidator = [
  body("learningPath")
    .optional()
    .isMongoId()
    .withMessage("Invalid Learning Path ID."),

  body("title")
    .optional()
    .trim()
    .isLength({
      min: 3,
      max: 100,
    })
    .withMessage(
      "Title must be between 3 and 100 characters."
    ),

  body("description")
    .optional()
    .isString()
    .withMessage(
      "Description must be a string."
    ),

  body("difficulty")
    .optional()
    .isIn(Object.values(Difficulty))
    .withMessage("Invalid difficulty."),

  body("visibility")
    .optional()
    .isIn(Object.values(Visibility))
    .withMessage("Invalid visibility."),

  body("subscriptionType")
    .optional()
    .isIn(Object.values(SubscriptionType))
    .withMessage(
      "Invalid subscription type."
    ),

  body("estimatedHours")
    .optional()
    .isFloat({
      min: 0,
    })
    .withMessage(
      "Estimated hours must be 0 or greater."
    ),

  body("estimatedSections")
    .optional()
    .isInt({
      min: 0,
    })
    .withMessage(
      "Estimated sections must be 0 or greater."
    ),

  body("estimatedNotes")
    .optional()
    .isInt({
      min: 0,
    })
    .withMessage(
      "Estimated notes must be 0 or greater."
    ),

  body("order")
    .optional()
    .isInt({
      min: 0,
    })
    .withMessage(
      "Order must be 0 or greater."
    ),
];

/**
 * Update Module Status
 */
export const updateModuleStatusValidator = [
  body("status")
    .notEmpty()
    .withMessage("Status is required.")
    .isIn(Object.values(ContentStatus))
    .withMessage("Invalid status."),
];