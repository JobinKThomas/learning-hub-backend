import { body } from "express-validator";

import Difficulty from "../../../../shared/enums/difficulty.enum.js";
import Visibility from "../../../../shared/enums/visibility.enum.js";
import SubscriptionType from "../../../../shared/enums/subscription.enum.js";
import ContentStatus from "../../../../shared/enums/contentStatus.enum.js";

export const createLearningPathValidator = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 3, max: 100 })
    .withMessage("Title must be between 3 and 100 characters."),

  body("shortDescription")
    .optional()
    .isLength({ max: 250 })
    .withMessage("Short description must be less than 250 characters."),

  body("difficulty")
    .optional()
    .isIn(Object.values(Difficulty)),

  body("visibility")
    .optional()
    .isIn(Object.values(Visibility)),

  body("subscriptionType")
    .optional()
    .isIn(Object.values(SubscriptionType)),

  body("estimatedHours")
    .optional()
    .isInt({
      min: 0,
    }),
    
  body("estimatedModules")
    .optional()
    .isInt({
      min: 0,
    }),

  body("estimatedNotes")
    .optional()
    .isInt({
      min: 0,
    }),

  body("tags")
    .optional()
    .isArray()
    .withMessage("Tags must be an array."),
];

export const updateLearningPathValidator = [
  body("title")
    .optional()
    .isLength({
    min:3,
    max:100
    })
];

export const updateLearningPathStatusValidator = [
  body("status")
    .notEmpty()
    .withMessage("Status is required")
    .isIn(Object.values(ContentStatus))
    .withMessage("Invalid status"),
];