import { body } from "express-validator";

import ContentStatus from "../../../../shared/enums/contentStatus.enum.js";
import Visibility from "../../../../shared/enums/visibility.enum.js";
import Difficulty from "../../../../shared/enums/difficulty.enum.js";
import SubscriptionType from "../../../../shared/enums/subscription.enum.js";
import NoteType from "../../../../shared/enums/noteType.enum.js";

/**
 * Create Note
 */
export const createNoteValidator = [
  body("topic")
    .notEmpty()
    .withMessage("Topic is required.")
    .isMongoId()
    .withMessage("Invalid Topic ID."),

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

  body("markdown")
    .trim()
    .notEmpty()
    .withMessage("Markdown content is required.")
    .isLength({
        max: 500000, // ~500 KB
    })
    .withMessage("Markdown content is too large."
    ),

  body("type")
    .optional()
    .isIn(Object.values(NoteType))
    .withMessage("Invalid note type."),

  body("shortDescription")
    .optional()
    .isLength({
      max: 250,
    })
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
    .isIn(
      Object.values(
        SubscriptionType
      )
    )
    .withMessage(
      "Invalid subscription type."
    ),

  body("order")
    .optional()
    .isInt({
      min: 0,
    })
    .withMessage(
      "Order must be greater than or equal to 0."
    ),
];

/**
 * Update Note
 */
export const updateNoteValidator = [
  body("topic")
    .optional()
    .isMongoId()
    .withMessage("Invalid Topic ID."),

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

  body("markdown")
    .optional()
    .isString()
    .withMessage("Markdown must be a string."),

  body("type")
    .optional()
    .isIn(Object.values(NoteType))
    .withMessage("Invalid note type."),

  body("shortDescription")
    .optional()
    .isLength({
      max: 250,
    })
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
    .isIn(
      Object.values(
        SubscriptionType
      )
    )
    .withMessage(
      "Invalid subscription type."
    ),

  body("order")
    .optional()
    .isInt({
      min: 0,
    })
    .withMessage(
      "Order must be greater than or equal to 0."
    ),
];

/**
 * Update Note Status
 */
export const updateNoteStatusValidator = [
  body("status")
    .notEmpty()
    .withMessage("Status is required.")
    .isIn(
      Object.values(
        ContentStatus
      )
    )
    .withMessage("Invalid status."),
];