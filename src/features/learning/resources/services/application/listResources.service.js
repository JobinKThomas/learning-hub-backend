import * as resourceRepository from "../../repositories/resource.repository.js";

import resourcePresenter from "../../presenters/resource.presenter.js";

const listResourcesService = async (
  filters = {}
) => {
  const {
    page = 1,
    limit = 20,
  } = filters;

  const resources =
    await resourceRepository.findResources(
      filters
    );

  const total =
    await resourceRepository.countResources(
      filters
    );

  return {
    items:
      resources.map(resourcePresenter),

    pagination: {
      page: Number(page),
      limit: Number(limit),
      total,
      totalPages: Math.ceil(
        total / Number(limit)
      ),
    },
  };
};

export default listResourcesService;