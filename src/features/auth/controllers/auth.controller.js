import asyncHandler from "../../../middleware/asyncHandler.middleware.js";

import ApiResponse from "../../../shared/ApiResponse.js";
import Messages from "../../../shared/constants/messages.js";

import userPresenter from "../presenters/user.presenter.js";

import registerService from "../services/application/register.service.js";
import loginService from "../services/application/login.service.js";
import logoutService from "../services/application/logout.service.js";
import refreshService from "../services/application/refresh.service.js";
import { refreshCookieOptions } from "../../../shared/utils/cookie.util.js";

/**
 * Register
 */
export const register = asyncHandler(
  async (req, res) => {
    const user = await registerService(req.body);

    return res.status(201).json(
      new ApiResponse({
        message: Messages.USER_REGISTERED,
        data: userPresenter(user),
      })
    );
  }
);

/**
 * Login
 */
export const login = asyncHandler(
  async (req, res) => {
    const result = await loginService(
      req.body,
      {
        userAgent:
          req.get("user-agent") || "",
        ipAddress: req.ip,
      }
    );

    res.cookie(
      "refreshToken",
      result.refreshToken,
      refreshCookieOptions
    );

    return res.json(
      new ApiResponse({
        message: Messages.LOGIN_SUCCESS,
        data: {
          user: userPresenter(
            result.user
          ),
          accessToken:
            result.accessToken,
        },
      })
    );
  }
);

/**
 * Refresh Token
 */
export const refresh = asyncHandler(
  async (req, res) => {
    const refreshToken =
      req.cookies.refreshToken ||
      req.body.refreshToken;

    const result =
      await refreshService(
        refreshToken,
        {
          userAgent:
            req.get("user-agent") || "",
          ipAddress: req.ip,
        }
      );

    res.cookie(
      "refreshToken",
      result.refreshToken,
      refreshCookieOptions
    );

    return res.json(
      new ApiResponse({
        message:
          Messages.TOKEN_REFRESHED,
        data: {
          user: userPresenter(
            result.user
          ),
          accessToken:
            result.accessToken,
        },
      })
    );
  }
);

/**
 * Logout
 */
export const logout = asyncHandler(
  async (req, res) => {
    const refreshToken =
      req.cookies.refreshToken ||
      req.body.refreshToken;

    await logoutService(
      refreshToken
    );

    res.clearCookie(
      "refreshToken"
    );

    return res.json(
      new ApiResponse({
        message:
          Messages.LOGOUT_SUCCESS,
      })
    );
  }
);

/**
 * Current User
 */
export const me = asyncHandler(
  async (req, res) => {
    return res.json(
      new ApiResponse({
        data: userPresenter(
          req.user
        ),
      })
    );
  }
);