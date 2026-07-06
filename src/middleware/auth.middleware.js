import ApiError from "../shared/ApiError.js";
import * as authRepository from "../features/auth/repositories/auth.repository.js";
import { verifyAccessToken } from "../features/auth/services/token.service.js";

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new ApiError(401, "Access token is required");
    }

    const token = authHeader.split(" ")[1];

    const payload = verifyAccessToken(token);

    const user = await authRepository.findUserById(payload.id);

    if (!user) {
      throw new ApiError(401, "User not found");
    }

    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};

export default authMiddleware;