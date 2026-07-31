import asyncHandler from "../../../../middleware/asyncHandler.middleware.js";

import ApiResponse from "../../../../shared/ApiResponse.js";
import {Messages} from "../../../../shared/constants/messages.js";

import resourcePresenter from "../presenters/resource.presenter.js";

import createResourceService from "../services/application/createResource.service.js";
import listResourcesService from "../services/application/listResources.service.js";
import getResourceBySlugService from "../services/application/getResourceBySlug.service.js";
import updateResourceService from "../services/application/updateResource.service.js";
import updateResourceStatusService from "../services/application/updateResourceStatus.service.js";
import deleteResourceService from "../services/application/deleteResource.service.js";

/**
 * Create Resource
 */
export const createResource = asyncHandler(
  async (req, res) => {
    const resource = await createResourceService(
      req.body,
      req.user.id
    );

    return res.status(201).json(
      new ApiResponse({
        message: Messages.RESOURCE_CREATED,
        data: resourcePresenter(resource),
      })
    );
  }
);

/**
 * List Resources
 */
export const listResources = asyncHandler(
  async (req, res) => {
    const result = await listResourcesService(
      req.query
    );

    return res.status(200).json(
      new ApiResponse({
        data: result,
      })
    );
  }
);

/**
 * Get Resource by Slug
 */
export const getResourceBySlug = asyncHandler(
  async (req, res) => {
    const resource =
      await getResourceBySlugService(
        req.params.slug
      );

    return res.status(200).json(
      new ApiResponse({
        data: resourcePresenter(resource),
      })
    );
  }
);

/**
 * Update Resource
 */
export const updateResource = asyncHandler(
  async (req, res) => {
    const resource =
      await updateResourceService(
        req.params.id,
        req.body,
        req.user.id
      );

    return res.status(200).json(
      new ApiResponse({
        message: Messages.RESOURCE_UPDATED,
        data: resourcePresenter(resource),
      })
    );
  }
);

/**
 * Update Resource Status
 */
export const updateResourceStatus =
  asyncHandler(async (req, res) => {
    const resource =
      await updateResourceStatusService(
        req.params.id,
        req.body.status,
        req.user.id
      );

    return res.status(200).json(
      new ApiResponse({
        message:
          Messages.RESOURCE_STATUS_UPDATED,
        data: resourcePresenter(resource),
      })
    );
  });

/**
 * Delete Resource
 */
export const deleteResource = asyncHandler(
  async (req, res) => {
    await deleteResourceService(
      req.params.id,
      req.user.id
    );

    return res.status(200).json(
      new ApiResponse({
        message: Messages.RESOURCE_DELETED,
      })
    );
  }
);