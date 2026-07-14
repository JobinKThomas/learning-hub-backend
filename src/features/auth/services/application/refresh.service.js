import ApiError from "../../../../shared/ApiError.js";
import Errors from "../../../../shared/constants/errors.js";

import * as authRepository from "../../repositories/auth.repository.js";

import {
  verifyRefreshToken,
  generateAccessToken,
  generateRefreshToken,
} from "../domain/token.service.js";

import {
  createSession,
  findActiveSession,
  revokeSession,
} from "../domain/session.service.js";

const refreshService = async (
  refreshToken,
  metadata = {}
) => {
  const {
    userAgent = "",
    ipAddress = "",
  } = metadata;

  let payload;

  try {
    payload = verifyRefreshToken(refreshToken);
  } catch {
    throw new ApiError(
      401,
      Errors.INVALID_REFRESH_TOKEN
    );
  }

  const session =
    await findActiveSession(refreshToken);

  if (!session) {
    throw new ApiError(
      401,
      Errors.INVALID_REFRESH_TOKEN
    );
  }

  const user =
    await authRepository.findUserById(
      payload.id
    );

  if (!user) {
    throw new ApiError(
      401,
      Errors.INVALID_REFRESH_TOKEN
    );
  }

  if (!user.isActive) {
    throw new ApiError(
      403,
      Errors.ACCOUNT_DISABLED
    );
  }

  const accessToken =
    generateAccessToken(user);

  const newRefreshToken =
    generateRefreshToken(user);

  await revokeSession(session._id);

  await createSession({
    userId: user._id,
    refreshToken: newRefreshToken,
    userAgent,
    ipAddress,
  });

  return {
    user,
    accessToken,
    refreshToken: newRefreshToken,
  };
};

export default refreshService;