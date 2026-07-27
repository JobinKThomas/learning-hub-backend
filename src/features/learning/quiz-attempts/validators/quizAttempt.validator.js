import { body } from "express-validator";

export const submitQuizValidator = [
  body("answers")
    .isArray({
      min: 1,
    })
    .withMessage(
      "Answers are required."
    ),

  body("answers.*.questionId")
    .isMongoId()
    .withMessage(
      "Invalid question id."
    ),

  body("answers.*.selectedOption")
    .trim()
    .isLength({
      min: 1,
      max: 5,
    })
    .withMessage(
      "Selected option is required."
    ),
];