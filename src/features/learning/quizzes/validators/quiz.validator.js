import { body } from "express-validator";

import ContentStatus from "../../../../shared/enums/contentStatus.enum.js";
import Difficulty from "../../../../shared/enums/difficulty.enum.js";
import Visibility from "../../../../shared/enums/visibility.enum.js";
import SubscriptionType from "../../../../shared/enums/subscription.enum.js";

/**
 * Create Quiz
 */
export const createQuizValidator = [
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

  body("shortDescription")
    .optional()
    .trim()
    .isLength({ max: 250 })
    .withMessage(
      "Short description cannot exceed 250 characters."
    ),

  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string."),

  body("instructions")
    .optional()
    .isString()
    .withMessage("Instructions must be a string."),

  body("passingScore")
    .optional()
    .custom((value) => {
      if (value % 5 !== 0) {
        throw new Error(
          "Passing score must be in multiples of 5."
        );
      }
      return true;
    }),

  body("timeLimit")
    .optional()
    .isInt({ min: 1 })
    .withMessage(
      "Time limit must be greater than 0."
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

  body("order")
    .optional()
    .isInt({ min: 0 })
    .withMessage(
      "Order must be greater than or equal to 0."
    ),
];

/**
 * Update Quiz
 */
export const updateQuizValidator = [
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

  body("shortDescription")
    .optional()
    .trim()
    .isLength({ max: 250 })
    .withMessage(
      "Short description cannot exceed 250 characters."
    ),

  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string."),

  body("instructions")
    .optional()
    .isString()
    .withMessage("Instructions must be a string."),

  body("passingScore")
    .optional()
    .custom((value) => {
      if (value % 5 !== 0) {
        throw new Error(
          "Passing score must be in multiples of 5."
        );
      }
      return true;
    }),

  body("timeLimit")
    .optional()
    .isInt({ min: 1 })
    .withMessage(
      "Time limit must be greater than 0."
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

  body("order")
    .optional()
    .isInt({ min: 0 })
    .withMessage(
      "Order must be greater than or equal to 0."
    ),
];

/**
 * Update Quiz Status
 */
export const updateQuizStatusValidator = [
  body("status")
    .notEmpty()
    .withMessage("Status is required.")
    .isIn(Object.values(ContentStatus))
    .withMessage("Invalid status."),
];