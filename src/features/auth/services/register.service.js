import ApiError from "../../../shared/ApiError.js";
import * as authRepository from "../repositories/auth.repository.js";
import userDto from "../dto/user.dto.js";

const register = async (userData) => {
  const existingUser = await authRepository.findUserByEmail(userData.email);

  if (existingUser) {
    throw new ApiError(409, "Email already exists");
  }

  const user = await authRepository.createUser(userData);

  return userDto(user);
};

export default register;