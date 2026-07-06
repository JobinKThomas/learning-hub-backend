import ApiResponse from "../../../shared/ApiResponse.js";
import registerService from "../services/register.service.js";

export const register = async (req, res, next) => {
  try {
    const user = await registerService(req.body);

    return res.status(201).json(
      new ApiResponse({
        message: "User registered successfully",
        data: user,
      })
    );
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res) => {};

export const logout = async (req, res) => {};

export const refresh = async (req, res) => {};

export const me = async (req, res) => {};