import asyncHandler from "../../../../middleware/asyncHandler.middleware.js";

import ApiResponse from "../../../../shared/ApiResponse.js";
import Messages from "../../../../shared/constants/messages.js";

import modulePresenter from "../presenters/module.presenter.js";

import createModuleService from "../services/application/createModule.service.js";
import listModulesService from "../services/application/listModules.service.js";
import getModuleBySlugService from "../services/application/getModuleBySlug.service.js";
import updateModuleService from "../services/application/updateModule.service.js";
import updateModuleStatusService from "../services/application/updateModuleStatus.service.js";
import deleteModuleService from "../services/application/deleteModule.service.js";

/**
 * Create Module
 */
export const createModule = asyncHandler(
  async (req, res) => {
    const module = await createModuleService(
      req.body,
      req.user.id
    );

    return res.status(201).json(
      new ApiResponse({
        message: Messages.MODULE_CREATED,
        data: modulePresenter(module),
      })
    );
  }
);

/**
 * List Modules
 */
export const listModules = asyncHandler(
  async (req, res) => {
    const result =
      await listModulesService({
        learningPathId: req.params.learningPathId,
        ...req.query,
      });

    return res.json(
      new ApiResponse({
        message: Messages.SUCCESS,
        data: {
          ...result,
          items: result.items.map(modulePresenter),
        },
      })
    );
  }
);

/**
 * Get Module By Slug
 */
export const getModuleBySlug = asyncHandler(
  async (req, res) => {
    const module =
      await getModuleBySlugService(
        req.params.slug
      );

    return res.json(
      new ApiResponse({
        message: Messages.SUCCESS,
        data: modulePresenter(module),
      })
    );
  }
);

/**
 * Update Module
 */
export const updateModule = asyncHandler(
  async (req, res) => {
    const module =
      await updateModuleService(
        req.params.id,
        req.body,
        req.user.id
      );

    return res.json(
      new ApiResponse({
        message: Messages.MODULE_UPDATED,
        data: modulePresenter(module),
      })
    );
  }
);

/**
 * Update Module Status
 */
export const updateModuleStatus = asyncHandler(
  async (req, res) => {
    const module =
      await updateModuleStatusService(
        req.params.id,
        req.body.status,
        req.user.id
      );

    return res.json(
      new ApiResponse({
        message: Messages.MODULE_UPDATED,
        data: modulePresenter(module),
      })
    );
  }
);

/**
 * Delete Module
 */
export const deleteModule = asyncHandler(
  async (req, res) => {
    await deleteModuleService(
      req.params.id,
      req.user.id
    );

    return res.json(
      new ApiResponse({
        message: Messages.MODULE_DELETED,
      })
    );
  }
);