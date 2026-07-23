import { body } from "express-validator";

import ContentStatus from "../../../../shared/enums/contentStatus.enum.js";
import Difficulty from "../../../../shared/enums/difficulty.enum.js";
import Visibility from "../../../../shared/enums/visibility.enum.js";
import SubscriptionType from "../../../../shared/enums/subscription.enum.js";

/**
 * Create Interview Question
 */
export const createInterviewQuestionValidator = [
  body("topic")
    .notEmpty()
    .withMessage("Topic is required.")
    .isMongoId()
    .withMessage("Invalid Topic ID."),

  body("question")
    .trim()
    .notEmpty()
    .withMessage("Question is required.")
    .isLength({ min: 10, max: 500 })
    .withMessage(
      "Question must be between 10 and 500 characters."
    ),

  body("answer")
    .trim()
    .notEmpty()
    .withMessage("Answer is required."),

  body("shortDescription")
    .optional()
    .trim()
    .isLength({ max: 250 })
    .withMessage(
      "Short description cannot exceed 250 characters."
    ),

  body("category")
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage(
      "Category cannot exceed 100 characters."
    ),

  body("tags")
    .optional()
    .isArray()
    .withMessage("Tags must be an array."),

  body("tags.*")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Tag cannot be empty."),

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

  body("order")
    .optional()
    .isInt({ min: 0 })
    .withMessage(
      "Order must be greater than or equal to 0."
    ),
];

/**
 * Update Interview Question
 */
export const updateInterviewQuestionValidator = [
  body("topic")
    .optional()
    .isMongoId()
    .withMessage("Invalid Topic ID."),

  body("question")
    .optional()
    .trim()
    .isLength({ min: 10, max: 500 })
    .withMessage(
      "Question must be between 10 and 500 characters."
    ),

  body("answer")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Answer cannot be empty."),

  body("shortDescription")
    .optional()
    .trim()
    .isLength({ max: 250 })
    .withMessage(
      "Short description cannot exceed 250 characters."
    ),

  body("category")
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage(
      "Category cannot exceed 100 characters."
    ),

  body("tags")
    .optional()
    .isArray()
    .withMessage("Tags must be an array."),

  body("tags.*")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Tag cannot be empty."),

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

  body("order")
    .optional()
    .isInt({ min: 0 })
    .withMessage(
      "Order must be greater than or equal to 0."
    ),
];

/**
 * Update Interview Question Status
 */
export const updateInterviewQuestionStatusValidator = [
  body("status")
    .notEmpty()
    .withMessage("Status is required.")
    .isIn(Object.values(ContentStatus))
    .withMessage("Invalid status."),
];