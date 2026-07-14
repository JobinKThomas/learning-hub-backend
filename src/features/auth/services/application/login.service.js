import ApiError from "../../../../shared/ApiError.js";
import Errors from "../../../../shared/constants/errors.js";
import env from "../../../../config/env.js";

import * as authRepository from "../../repositories/auth.repository.js";

import {
  generateAccessToken,
  generateRefreshToken,
  hashRefreshToken,
} from "../domain/token.service.js";

const loginService = async (
  payload,
  metadata = {}
) => {
  const { email, password } = payload;

  const {
    userAgent = "",
    ipAddress = "",
  } = metadata;

  const user =
    await authRepository.findUserByEmailWithPassword(
      email
    );

  if (!user) {
    throw new ApiError(
      401,
      Errors.INVALID_CREDENTIALS
    );
  }

  if (!user.isActive) {
    throw new ApiError(
      403,
      Errors.ACCOUNT_DISABLED
    );
  }

  const isPasswordValid =
    await user.comparePassword(password);

  if (!isPasswordValid) {
    throw new ApiError(
      401,
      Errors.INVALID_CREDENTIALS
    );
  }

  const accessToken =
    generateAccessToken(user);

  const refreshToken =
    generateRefreshToken(user);

  const refreshTokenHash =
    hashRefreshToken(refreshToken);

  await authRepository.createSession({
    user: user._id,
    refreshTokenHash,
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

  await authRepository.updateLastLogin(
    user._id
  );

  return {
    user,
    accessToken,
    refreshToken,
  };
};

export default loginService;