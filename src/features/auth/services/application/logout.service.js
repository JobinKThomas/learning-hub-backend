import ApiError from "../../../../shared/ApiError.js";
import Errors from "../../../../shared/constants/errors.js";

import {
  verifyRefreshToken,
} from "../domain/token.service.js";

import {
  findActiveSession,
  revokeSession,
} from "../domain/session.service.js";

const logoutService = async (
  refreshToken
) => {
  try {
    verifyRefreshToken(refreshToken);
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

  await revokeSession(session._id);

  return true;
};

export default logoutService;