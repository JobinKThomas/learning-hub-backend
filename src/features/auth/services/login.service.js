import ApiError from "../../../shared/ApiError.js";
import userDto from "../dto/user.dto.js";
import env from "../../../config/env.js";
import * as authRepository from "../repositories/auth.repository.js";

import {
  generateAccessToken,
  generateRefreshToken,
  hashToken,
} from "./token.service.js";

const loginService = async (payload) => {
  const { email, password } = payload;

  const user =
    await authRepository.findUserByEmailWithPassword(email);

  if (!user) {
    throw new ApiError(401, "Invalid email or password");
  }

  const isPasswordValid =
    await user.comparePassword(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid email or password");
  }

  const accessToken =
    generateAccessToken(user);

  const refreshToken =
    generateRefreshToken(user);

  const refreshTokenHash =
    hashToken(refreshToken);

  await authRepository.createSession({
    user: user._id,
    refreshTokenHash,
    userAgent: "",
    ipAddress: "",
    expiresAt: new Date(
        Date.now() +
        env.refresh.expiresDays * 24 * 60 * 60 * 1000
    ),
  });

  await authRepository.updateLastLogin(user._id);

  return {
    user: userDto(user),
    accessToken,
    refreshToken,
  };
};

export default loginService;