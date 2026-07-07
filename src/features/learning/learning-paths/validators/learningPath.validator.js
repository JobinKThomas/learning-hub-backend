import { body } from "express-validator";

import Difficulty from "../../shared/enums/difficulty.enum.js";
import Visibility from "../../shared/enums/visibility.enum.js";
import SubscriptionType from "../../shared/enums/subscription.enum.js";
import ContentStatus from "../../shared/enums/contentStatus.enum.js";

export const createLearningPathValidator = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 3, max: 100 }),

  body("shortDescription")
    .optional()
    .isLength({ max: 250 }),

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
    .isNumeric(),

  body("estimatedModules")
    .optional()
    .isNumeric(),

  body("estimatedNotes")
    .optional()
    .isNumeric(),

  body("tags")
    .optional()
    .isArray(),
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