import { body } from "express-validator";

import ContentStatus from "../../../../shared/enums/contentStatus.enum.js";
import Difficulty from "../../../../shared/enums/difficulty.enum.js";
import Visibility from "../../../../shared/enums/visibility.enum.js";
import SubscriptionType from "../../../../shared/enums/subscription.enum.js";
import ResourceType from "../../../../shared/enums/resourceType.enum.js";

/**
 * Create Resource
 */
export const createResourceValidator = [
  body("topic")
    .notEmpty()
    .withMessage("Topic is required.")
    .isMongoId()
    .withMessage("Invalid Topic ID."),

  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required.")
    .isLength({ min: 3, max: 150 })
    .withMessage(
      "Title must be between 3 and 150 characters."
    ),

  body("url")
    .trim()
    .notEmpty()
    .withMessage("URL is required.")
    .isURL()
    .withMessage("Invalid URL."),

  body("type")
    .notEmpty()
    .withMessage("Resource type is required.")
    .isIn(Object.values(ResourceType))
    .withMessage("Invalid resource type."),

  body("shortDescription")
    .optional()
    .isLength({ max: 250 })
    .withMessage(
      "Short description cannot exceed 250 characters."
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
    .isIn(
      Object.values(SubscriptionType)
    )
    .withMessage(
      "Invalid subscription type."
    ),

  body("order")
    .optional()
    .isInt({ min: 0 })
    .withMessage(
      "Order must be greater than or equal to 0."
    ),
];

/**
 * Update Resource
 */
export const updateResourceValidator = [
  body("topic")
    .optional()
    .isMongoId()
    .withMessage("Invalid Topic ID."),

  body("title")
    .optional()
    .trim()
    .isLength({ min: 3, max: 150 })
    .withMessage(
      "Title must be between 3 and 150 characters."
    ),

  body("url")
    .optional()
    .trim()
    .isURL()
    .withMessage("Invalid URL."),

  body("type")
    .optional()
    .isIn(Object.values(ResourceType))
    .withMessage("Invalid resource type."),

  body("shortDescription")
    .optional()
    .isLength({ max: 250 })
    .withMessage(
      "Short description cannot exceed 250 characters."
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
    .isIn(
      Object.values(SubscriptionType)
    )
    .withMessage(
      "Invalid subscription type."
    ),

  body("order")
    .optional()
    .isInt({ min: 0 })
    .withMessage(
      "Order must be greater than or equal to 0."
    ),
];

/**
 * Update Resource Status
 */
export const updateResourceStatusValidator = [
  body("status")
    .notEmpty()
    .withMessage("Status is required.")
    .isIn(
      Object.values(ContentStatus)
    )
    .withMessage("Invalid status."),
];