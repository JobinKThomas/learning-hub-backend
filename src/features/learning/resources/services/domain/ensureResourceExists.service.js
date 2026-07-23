import ApiError from "../../../../../shared/ApiError.js";

import * as resourceRepository from "../../repositories/resource.repository.js";

const ensureResourceExists = async (
  id
) => {
  const resource =
    await resourceRepository.findResourceById(
      id
    );

  if (!resource) {
    throw new ApiError(
      404,
      "Resource not found"
    );
  }

  return resource;
};

export default ensureResourceExists;