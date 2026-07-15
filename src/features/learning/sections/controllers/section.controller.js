import asyncHandler from "../../../../middleware/asyncHandler.middleware.js";

import ApiResponse from "../../../../shared/ApiResponse.js";
import Messages from "../../../../shared/constants/messages.js";

import sectionPresenter from "../presenters/section.presenter.js";

import createSectionService from "../services/application/createSection.service.js";
import listSectionsService from "../services/application/listSections.service.js";
import getSectionBySlugService from "../services/application/getSectionBySlug.service.js";
import updateSectionService from "../services/application/updateSection.service.js";
import updateSectionStatusService from "../services/application/updateSectionStatus.service.js";
import deleteSectionService from "../services/application/deleteSection.service.js";

/**
 * Create Section
 */
export const createSection = asyncHandler(
  async (req, res) => {
    const section = await createSectionService(
      req.body,
      req.user.id
    );

    return res.status(201).json(
      new ApiResponse({
        message: Messages.SECTION_CREATED,
        data: sectionPresenter(section),
      })
    );
  }
);

/**
 * List Sections
 */
export const listSections = asyncHandler(
  async (req, res) => {
    const result = await listSectionsService(
      req.query
    );

    return res.json(
      new ApiResponse({
        message: Messages.SUCCESS,
        data: {
          ...result,
          items: result.items.map(sectionPresenter),
        },
      })
    );
  }
);

/**
 * Get Section by Slug
 */
export const getSectionBySlug = asyncHandler(
  async (req, res) => {
    const section =
      await getSectionBySlugService(
        req.params.slug
      );

    return res.json(
      new ApiResponse({
        message: Messages.SUCCESS,
        data: sectionPresenter(section),
      })
    );
  }
);

/**
 * Update Section
 */
export const updateSection = asyncHandler(
  async (req, res) => {
    const section =
      await updateSectionService(
        req.params.id,
        req.body,
        req.user.id
      );

    return res.json(
      new ApiResponse({
        message: Messages.SECTION_UPDATED,
        data: sectionPresenter(section),
      })
    );
  }
);

/**
 * Update Section Status
 */
export const updateSectionStatus =
  asyncHandler(async (req, res) => {
    const section =
      await updateSectionStatusService(
        req.params.id,
        req.body.status,
        req.user.id
      );

    return res.json(
      new ApiResponse({
        message:
          Messages.SECTION_STATUS_UPDATED,
        data: sectionPresenter(section),
      })
    );
  });

/**
 * Delete Section
 */
export const deleteSection = asyncHandler(
  async (req, res) => {
    await deleteSectionService(
      req.params.id,
      req.user.id
    );

    return res.json(
      new ApiResponse({
        message: Messages.SECTION_DELETED,
      })
    );
  }
);