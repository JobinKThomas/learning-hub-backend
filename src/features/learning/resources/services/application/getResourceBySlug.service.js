import ApiError from "../../../../../shared/ApiError.js";

import * as resourceRepository from "../../repositories/resource.repository.js";

const getResourceBySlugService =
  async (slug) => {
    const resource =
      await resourceRepository.findResourceBySlug(
        slug
      );

    if (!resource) {
      throw new ApiError(
        404,
        "Resource not found"
      );
    }

    return resource;
  };

export default getResourceBySlugService;