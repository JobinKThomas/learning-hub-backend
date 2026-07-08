import { body } from "express-validator";

export const createModuleValidator = [
  body("learningPath")
    .notEmpty()
    .withMessage("Learning Path is required")
    .isMongoId()
    .withMessage("Invalid Learning Path"),

  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .isLength({
      min: 3,
      max: 100,
    }),

  body("description")
    .optional()
    .isString(),

  body("estimatedHours")
    .optional()
    .isFloat({
      min: 0,
    }),

  body("order")
    .optional()
    .isInt({
      min: 0,
    }),
];

export const updateModuleValidator = [

  body("title")
    .optional()
    .trim()
    .isLength({
      min: 3,
      max: 100,
    }),

  body("learningPath")
    .optional()
    .isMongoId(),

  body("estimatedHours")
    .optional()
    .isFloat({
      min: 0,
    }),

  body("order")
    .optional()
    .isInt({
      min: 0,
    }),

];