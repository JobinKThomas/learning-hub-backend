import ApiError from "../../../../../shared/ApiError.js";

import playgroundPresenter from "../../presenters/playground.presenter.js";

import * as playgroundRepository from "../../repositories/playground.repository.js";

const getPlaygroundBySlugService =
  async (slug) => {
    const playground =
      await playgroundRepository.findPlaygroundBySlug(
        slug
      );

    if (!playground) {
      throw new ApiError(
        404,
        "Playground not found"
      );
    }

    return playgroundPresenter(
      playground
    );
  };

export default getPlaygroundBySlugService;