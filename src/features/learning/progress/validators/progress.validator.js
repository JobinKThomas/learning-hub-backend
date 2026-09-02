import { param, body } from "express-validator";

import ProgressType from "../../../../shared/enums/progressType.enum.js";

export const topicProgressValidator = [
  param("topicId")
    .isMongoId()
    .withMessage("Invalid Topic ID."),
];
export const moduleProgressValidator = [
  param("moduleId")
    .isMongoId()
    .withMessage("Invalid Module ID."),
];
export const sectionProgressValidator = [
  param("sectionId")
    .isMongoId()
    .withMessage("Invalid Section ID."),
];
export const completeTopicContentValidator = [
  param("topicId")
    .isMongoId()
    .withMessage("Invalid topic ID."),

  body("type")
    .isIn([
      "NOTE",
      "RESOURCE",
      "PLAYGROUND",
      "QUIZ",
    ])
    .withMessage("Invalid progress type."),
];
export const completeTopicValidator = [
  body("type")
    .trim()
    .notEmpty()
    .withMessage("Progress type is required.")
    .isIn(Object.values(ProgressType))
    .withMessage("Invalid progress type."),
];