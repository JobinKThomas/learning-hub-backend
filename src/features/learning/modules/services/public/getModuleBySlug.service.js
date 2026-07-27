import ApiError from "../../../../../shared/ApiError.js";

import ContentStatus from "../../../../../shared/enums/contentStatus.enum.js";
import Visibility from "../../../../../shared/enums/visibility.enum.js";

import { Messages } from "../../../../../shared/constants/messages.js";

import modulePresenter from "../../presenters/public/module.presenter.js";

import * as moduleRepository from "../../repositories/module.repository.js";
import * as sectionRepository from "../../../sections/repositories/section.repository.js";

const getModuleBySlugService = async (slug) => {
  const module = await moduleRepository.findModuleBySlug(
    slug,
    {
      status: ContentStatus.PUBLISHED,
      visibility: Visibility.PUBLIC,
    }
  );

  if (!module) {
    throw new ApiError(
      404,
      Messages.MODULE_NOT_FOUND
    );
  }

  const sections =
    await sectionRepository.findSections({
      module: module._id || module.id,
      status: ContentStatus.PUBLISHED,
      visibility: Visibility.PUBLIC,
      limit: Number.MAX_SAFE_INTEGER,
      sort: "order",
    });

  return {
    module: modulePresenter(module),
    sections,
  };
};

export default getModuleBySlugService;