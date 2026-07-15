import ApiError from "../../../../shared/ApiError.js";
import Errors from "../../../../shared/constants/errors.js";

import * as authRepository from "../../repositories/auth.repository.js";

const registerService = async (payload) => {
  const existingUser =
    await authRepository.findUserByEmail(
      payload.email
    );

  if (existingUser) {
    throw new ApiError(
      409,
      Errors.EMAIL_ALREADY_EXISTS
    );
  }

  const user =
    await authRepository.createUser(
      payload
    );

  return user;
};

export default registerService;