import ApiError from "../../../../../shared/ApiError.js";

import ContentStatus from "../../../../../shared/enums/contentStatus.enum.js";
import Visibility from "../../../../../shared/enums/visibility.enum.js";

import { Messages } from "../../../../../shared/constants/messages.js";

import playgroundDetailPresenter from "../../presenters/public/playgroundDetail.presenter.js";

import * as playgroundRepository from "../../repositories/playground.repository.js";

const getPlaygroundBySlugService = async (
  slug
) => {
  const playground =
    await playgroundRepository.findPlaygroundBySlug(
      slug,
      {
        status: ContentStatus.PUBLISHED,
        visibility: Visibility.PUBLIC,
      }
    );

  if (!playground) {
    throw new ApiError(
      404,
      Messages.PLAYGROUND_NOT_FOUND
    );
  }

  return playgroundDetailPresenter(
    playground
  );
};

export default getPlaygroundBySlugService;