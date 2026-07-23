import { body } from "express-validator";

/**
 * Validate options array
 */
const optionsValidator = body("options")
  .isArray({ min: 2, max: 6 })
  .withMessage("Options must contain between 2 and 6 items.")
  .custom((options) => {
    const ids = new Set();

    for (const option of options) {
      if (!option.id || !option.label) {
        throw new Error(
          "Each option must contain id and label."
        );
      }

      if (ids.has(option.id)) {
        throw new Error(
          "Option ids must be unique."
        );
      }

      ids.add(option.id);
    }

    return true;
  });

/**
 * Create Question
 */
export const createQuestionValidator = [
  body("quiz")
    .notEmpty()
    .withMessage("Quiz is required.")
    .isMongoId()
    .withMessage("Invalid Quiz ID."),

  body("question")
    .trim()
    .notEmpty()
    .withMessage("Question is required."),

  body("explanation")
    .optional()
    .isString()
    .withMessage("Explanation must be a string."),

  body("type")
    .optional()
    .isIn(["MCQ"])
    .withMessage("Invalid question type."),

  optionsValidator,

  body("correctOption")
    .notEmpty()
    .withMessage("Correct option is required."),

  body("points")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Points must be at least 1."),

  body("order")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Order must be greater than or equal to 0."),
];

/**
 * Update Question
 */
export const updateQuestionValidator = [
  body("quiz")
    .optional()
    .isMongoId()
    .withMessage("Invalid Quiz ID."),

  body("question")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Question cannot be empty."),

  body("explanation")
    .optional()
    .isString()
    .withMessage("Explanation must be a string."),

  body("type")
    .optional()
    .isIn(["MCQ"])
    .withMessage("Invalid question type."),

  body("options")
    .optional()
    .isArray({ min: 2, max: 6 })
    .withMessage("Options must contain between 2 and 6 items."),

  body("correctOption")
    .optional(),

  body("points")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Points must be at least 1."),

  body("order")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Order must be greater than or equal to 0."),
];