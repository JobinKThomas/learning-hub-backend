import ApiError from "../../../shared/ApiError.js";
import userDto from "../dto/user.dto.js";
import {
  findUserByEmail,
  createUser,
} from "../repositories/auth.repository.js";

const registerService = async (payload) => {
  const existingUser = await findUserByEmail(payload.email);

  if (existingUser) {
    throw new ApiError(409, "Email already exists");
  }

  const user = await createUser(payload);

  return userDto(user);
};

export default registerService;