import jwt from "jsonwebtoken";
import crypto from "crypto";
import env from "../../../../config/env.js";

/**
 * Generate Access Token
 */
export const generateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    env.jwt.secret,
    {
      expiresIn: env.jwt.expiresIn,
    }
  );
};

/**
 * Generate Refresh Token
 */
export const generateRefreshToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
    },
    env.refresh.secret,
    {
      expiresIn: env.refresh.expiresIn,
    }
  );
};

/**
 * Verify Access Token
 */
export const verifyAccessToken = (token) => {
  return jwt.verify(token, env.jwt.secret);
};

/**
 * Verify Refresh Token
 */
export const verifyRefreshToken = (token) => {
  return jwt.verify(token, env.refresh.secret);
};

/**
 * Hash Refresh Token
 */
export const hashRefreshToken = (token) => {
  return crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");
};