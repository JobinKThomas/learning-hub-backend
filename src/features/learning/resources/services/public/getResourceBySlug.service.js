import ApiError from "../../../../../shared/ApiError.js";

import ContentStatus from "../../../../../shared/enums/contentStatus.enum.js";
import Visibility from "../../../../../shared/enums/visibility.enum.js";

import { Messages } from "../../../../../shared/constants/messages.js";

import resourceDetailPresenter from "../../presenters/public/resourceDetail.presenter.js";

import * as resourceRepository from "../../repositories/resource.repository.js";

const getResourceBySlugService = async (
  slug
) => {
  const resource =
    await resourceRepository.findResourceBySlug(
      slug,
      {
        status: ContentStatus.PUBLISHED,
        visibility: Visibility.PUBLIC,
      }
    );

  if (!resource) {
    throw new ApiError(
      404,
      Messages.RESOURCE_NOT_FOUND
    );
  }

  return resourceDetailPresenter(resource);
};

export default getResourceBySlugService;