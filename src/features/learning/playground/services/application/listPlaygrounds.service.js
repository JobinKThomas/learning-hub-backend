import buildPaginationMeta from "../../../../../shared/builders/pagination.builder.js";

import playgroundPresenter from "../../presenters/playground.presenter.js";

import * as playgroundRepository from "../../repositories/playground.repository.js";

const listPlaygroundsService = async (
  filters
) => {
  const playgrounds =
    await playgroundRepository.findPlaygrounds(
      filters
    );

  const total =
    await playgroundRepository.countPlaygrounds(
      filters
    );

  return {
    items: playgrounds.map(
      playgroundPresenter
    ),

    pagination:
      buildPaginationMeta({
        page: filters.page,
        limit: filters.limit,
        total,
      }),
  };
};

export default listPlaygroundsService;