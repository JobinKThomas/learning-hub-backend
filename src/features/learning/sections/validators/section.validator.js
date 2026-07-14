import { body } from "express-validator";

export const createSectionValidator = [

  body("title")
    .trim()
    .notEmpty()
    .isLength({
      min: 3,
      max: 100,
    }),

  body("learningPath")
    .notEmpty()
    .isMongoId(),

  body("module")
    .notEmpty()
    .isMongoId(),

  body("parentSection")
    .optional({ nullable: true })
    .isMongoId(),

  body("shortDescription")
    .optional()
    .isLength({
      max: 250,
    }),

  body("description")
    .optional(),

  body("order")
    .optional()
    .isInt({
      min: 0,
    }),

];