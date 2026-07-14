import env from "../../../../config/env.js";

import * as authRepository from "../../repositories/auth.repository.js";

import { hashRefreshToken } from "./token.service.js";

/**
 * Create Session
 */
export const createSession = async ({
  userId,
  refreshToken,
  userAgent = "",
  ipAddress = "",
}) => {
  return authRepository.createSession({
    user: userId,
    refreshTokenHash:
      hashRefreshToken(refreshToken),
    userAgent,
    ipAddress,
    expiresAt: new Date(
      Date.now() +
        env.refresh.expiresDays *
          24 *
          60 *
          60 *
          1000
    ),
  });
};

/**
 * Revoke Session
 */
export const revokeSession = (id) => {
  return authRepository.revokeSession(id);
};

/**
 * Revoke All Sessions
 */
export const revokeAllSessions = (
  userId
) => {
  return authRepository.revokeAllSessions(
    userId
  );
};

/**
 * Find Active Session
 */
export const findActiveSession = (
  refreshToken
) => {
  return authRepository.findSessionByHash(
    hashRefreshToken(refreshToken)
  );
};