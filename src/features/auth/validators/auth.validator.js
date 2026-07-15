import { body } from "express-validator";

/**
 * Register
 */
export const registerValidator = [
  body("firstName")
    .trim()
    .notEmpty()
    .withMessage("First name is required.")
    .isLength({
      min: 2,
      max: 50,
    })
    .withMessage(
      "First name must be between 2 and 50 characters."
    ),

  body("email")
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage("Valid email is required."),

  body("password")
    .isLength({
      min: 8,
    })
    .withMessage(
      "Password must be at least 8 characters."
    ),
];

/**
 * Login
 */
export const loginValidator = [
  body("email")
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage("Valid email is required."),

  body("password")
    .notEmpty()
    .withMessage("Password is required."),
];

/**
 * Refresh Token
 */
export const refreshValidator = [
  body("refreshToken")
    .notEmpty()
    .withMessage("Refresh token is required.")
    .isString()
    .withMessage("Invalid refresh token."),
];

/**
 * Logout
 */
export const logoutValidator = [
  body("refreshToken")
    .notEmpty()
    .withMessage("Refresh token is required.")
    .isString()
    .withMessage("Invalid refresh token."),
];