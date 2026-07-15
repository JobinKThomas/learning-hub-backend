import { body } from "express-validator";

import ContentStatus from "../../../../shared/enums/contentStatus.enum.js";
import Visibility from "../../../../shared/enums/visibility.enum.js";
import Difficulty from "../../../../shared/enums/difficulty.enum.js";
import SubscriptionType from "../../../../shared/enums/subscription.enum.js";

/**
 * Create Section
 */
export const createSectionValidator = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required.")
    .isLength({ min: 3, max: 100 })
    .withMessage(
      "Title must be between 3 and 100 characters."
    ),

  body("learningPath")
    .notEmpty()
    .withMessage("Learning Path is required.")
    .isMongoId()
    .withMessage("Invalid Learning Path ID."),

  body("module")
    .notEmpty()
    .withMessage("Module is required.")
    .isMongoId()
    .withMessage("Invalid Module ID."),

  body("parentSection")
    .optional({
      values: "falsy",
      nullable: true,
    })
    .isMongoId()
    .withMessage("Invalid Parent Section ID."),

  body("shortDescription")
    .optional()
    .isLength({ max: 250 })
    .withMessage(
      "Short description cannot exceed 250 characters."
    ),

  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string."),

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
    .withMessage("Invalid subscription type."),

  body("order")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Order must be greater than or equal to 0."),
];

/**
 * Update Section
 */
export const updateSectionValidator = [
  body("title")
    .optional()
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage(
      "Title must be between 3 and 100 characters."
    ),

  body("learningPath")
    .optional()
    .isMongoId()
    .withMessage("Invalid Learning Path ID."),

  body("module")
    .optional()
    .isMongoId()
    .withMessage("Invalid Module ID."),

  body("parentSection")
    .optional({
      values: "falsy",
      nullable: true,
    })
    .isMongoId()
    .withMessage("Invalid Parent Section ID."),

  body("shortDescription")
    .optional()
    .isLength({ max: 250 })
    .withMessage(
      "Short description cannot exceed 250 characters."
    ),

  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string."),

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
    .withMessage("Invalid subscription type."),

  body("order")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Order must be greater than or equal to 0."),
];

/**
 * Update Section Status
 */
export const updateSectionStatusValidator = [
  body("status")
    .notEmpty()
    .withMessage("Status is required.")
    .isIn(Object.values(ContentStatus))
    .withMessage("Invalid status."),
];