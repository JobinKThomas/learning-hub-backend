import asyncHandler from "../../../../middleware/asyncHandler.middleware.js";

import ApiResponse from "../../../../shared/ApiResponse.js";
import Messages from "../../../../shared/constants/messages.js";

import playgroundPresenter from "../presenters/playground.presenter.js";

import createPlaygroundService from "../services/application/createPlayground.service.js";
import listPlaygroundsService from "../services/application/listPlaygrounds.service.js";
import getPlaygroundBySlugService from "../services/application/getPlaygroundBySlug.service.js";
import updatePlaygroundService from "../services/application/updatePlayground.service.js";
import updatePlaygroundStatusService from "../services/application/updatePlaygroundStatus.service.js";
import deletePlaygroundService from "../services/application/deletePlayground.service.js";

/**
 * Create Playground
 */
export const createPlayground = asyncHandler(async (req, res) => {
  const playground = await createPlaygroundService(
    req.body,
    req.user.id
  );

  return res.status(201).json(
    new ApiResponse({
      message: Messages.PLAYGROUND_CREATED,
      data: playgroundPresenter(playground),
    })
  );
});

/**
 * List Playgrounds
 */
export const listPlaygrounds = asyncHandler(async (req, res) => {
  const result = await listPlaygroundsService(req.query);

  return res.status(200).json(
    new ApiResponse({
      data: result,
    })
  );
});

/**
 * Get Playground by Slug
 */
export const getPlaygroundBySlug = asyncHandler(async (req, res) => {
  const playground = await getPlaygroundBySlugService(
    req.params.slug
  );

  return res.status(200).json(
    new ApiResponse({
      data: playgroundPresenter(playground),
    })
  );
});

/**
 * Update Playground
 */
export const updatePlayground = asyncHandler(async (req, res) => {
  const playground = await updatePlaygroundService(
    req.params.id,
    req.body,
    req.user.id
  );

  return res.status(200).json(
    new ApiResponse({
      message: Messages.PLAYGROUND_UPDATED,
      data: playgroundPresenter(playground),
    })
  );
});

/**
 * Update Playground Status
 */
export const updatePlaygroundStatus = asyncHandler(async (req, res) => {
  const playground = await updatePlaygroundStatusService(
    req.params.id,
    req.body.status,
    req.user.id
  );

  return res.status(200).json(
    new ApiResponse({
      message: Messages.PLAYGROUND_STATUS_UPDATED,
      data: playgroundPresenter(playground),
    })
  );
});

/**
 * Delete Playground
 */
export const deletePlayground = asyncHandler(async (req, res) => {
  await deletePlaygroundService(
    req.params.id,
    req.user.id
  );

  return res.status(200).json(
    new ApiResponse({
      message: Messages.PLAYGROUND_DELETED,
    })
  );
});