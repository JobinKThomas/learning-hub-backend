import User from "../models/User.js";
import Session from "../models/Session.js";

/**
 * Create user
 */
export const createUser = (data) => {
  return User.create(data);
};

/**
 * Find user by id
 */
export const findUserById = (id) => {
  return User.findById(id);
};

/**
 * Find user by email
 */
export const findUserByEmail = (email) => {
  return User.findOne({ email });
};

/**
 * Find user by email with password
 */
export const findUserByEmailWithPassword = (email) => {
  return User.findOne({ email }).select("+password");
};


/**
 * Update last login
 */
export const updateLastLogin = (id) => {
  return User.findByIdAndUpdate(id, {
    lastLogin: new Date(),
  });
};

/**
 * Create session
 */
export const createSession = (data) => {
  return Session.create(data);
};

/**
 * Find active session
 */
export const findSessionByHash = (hash) => {
  return Session.findOne({
    refreshTokenHash: hash,
    isRevoked: false,
  });
};

/**
 * Revoke session
 */
export const revokeSession = (id) => {
  return Session.findByIdAndUpdate(id, {
    isRevoked: true,
  });
};

/**
 * Revoke all user sessions
 */
export const revokeAllSessions = (userId) => {
  return Session.updateMany(
    { user: userId },
    { isRevoked: true }
  );
};