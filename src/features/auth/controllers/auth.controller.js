import ApiResponse from "../../../shared/ApiResponse.js";
import registerService from "../services/register.service.js";
import loginService from "../services/login.service.js";
import userDto from "../dto/user.dto.js";


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

export const login = async (req, res, next) => {
  try {
    const userAgent = req.get("User-Agent") || "";  
    const ipAddress = req.ip || req.connection.remoteAddress || "";

    const result =
      await loginService({
        ...req.body,
        userAgent,
        ipAddress
      });

    res.cookie("refreshToken", result.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json(
      new ApiResponse({
        message: "Login successful",
        data: {
          user: result.user,
          accessToken: result.accessToken,
        },
      })
    );
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res) => {};

export const refresh = async (req, res) => {};

export const me = async (req, res) => {
  return res.json(
    new ApiResponse({
      message: "Current user",
      data: userDto(req.user),
    })
  );
};