import asyncHandler from "../../../../middleware/asyncHandler.middleware.js";

import ApiResponse from "../../../../shared/ApiResponse.js";

import Messages from "../../../../shared/constants/messages.js";

import sectionPresenter from "../presenters/section.presenter.js";

import createSectionService from "../services/application/createSection.service.js";
import getSectionBySlugService from "../services/application/getSectionBySlug.service.js";
import listSectionsService from "../services/application/listSections.service.js";


export const createSection =
asyncHandler(async (req, res) => {

  const section =
    await createSectionService(
      req.body,
      req.user.id
    );

  return res.status(201).json(
    new ApiResponse({
      message:
        Messages.SECTION_CREATED,
      data:
        sectionPresenter(section),
    })
  );
});

export const listSections = asyncHandler(
  async (req, res) => {
    const result =
      await listSectionsService(req.query);

    return res.json(
      new ApiResponse({
        data: result,
      })
    );
  }
);

export const getSection =
asyncHandler(async (req, res) => {

    const section =
        await getSectionBySlugService(
            req.params.slug
        );

    return res.json(
        new ApiResponse({
            data: section,
        })
    );

});