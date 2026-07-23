import { body } from "express-validator";

import ContentStatus from "../../../../shared/enums/contentStatus.enum.js";
import Difficulty from "../../../../shared/enums/difficulty.enum.js";
import Visibility from "../../../../shared/enums/visibility.enum.js";
import SubscriptionType from "../../../../shared/enums/subscription.enum.js";
import ProgrammingLanguage from "../../../../shared/enums/programmingLanguage.enum.js";

/**
 * Create Playground
 */
export const createPlaygroundValidator = [
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
    .withMessage("Title must be between 3 and 150 characters."),

  body("shortDescription")
    .optional()
    .trim()
    .isLength({ max: 250 })
    .withMessage("Short description cannot exceed 250 characters."),

  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string."),

  body("language")
    .notEmpty()
    .withMessage("Programming language is required.")
    .isIn(Object.values(ProgrammingLanguage))
    .withMessage("Invalid programming language."),

  body("starterCode")
    .trim()
    .notEmpty()
    .withMessage("Starter code is required."),

  body("solutionCode")
    .optional()
    .isString()
    .withMessage("Solution code must be a string."),

  body("explanation")
    .optional()
    .isString()
    .withMessage("Explanation must be a string."),

  body("estimatedMinutes")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Estimated minutes must be at least 1."),

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
 * Update Playground
 */
export const updatePlaygroundValidator = [
  body("topic")
    .optional()
    .isMongoId()
    .withMessage("Invalid Topic ID."),

  body("title")
    .optional()
    .trim()
    .isLength({ min: 3, max: 150 })
    .withMessage("Title must be between 3 and 150 characters."),

  body("shortDescription")
    .optional()
    .trim()
    .isLength({ max: 250 })
    .withMessage("Short description cannot exceed 250 characters."),

  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string."),

  body("language")
    .optional()
    .isIn(Object.values(ProgrammingLanguage))
    .withMessage("Invalid programming language."),

  body("starterCode")
    .optional()
    .isString()
    .withMessage("Starter code must be a string."),

  body("solutionCode")
    .optional()
    .isString()
    .withMessage("Solution code must be a string."),

  body("explanation")
    .optional()
    .isString()
    .withMessage("Explanation must be a string."),

  body("estimatedMinutes")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Estimated minutes must be at least 1."),

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
 * Update Playground Status
 */
export const updatePlaygroundStatusValidator = [
  body("status")
    .notEmpty()
    .withMessage("Status is required.")
    .isIn(Object.values(ContentStatus))
    .withMessage("Invalid status."),
];