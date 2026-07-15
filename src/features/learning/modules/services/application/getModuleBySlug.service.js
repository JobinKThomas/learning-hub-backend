import ApiError from "../../../../../shared/ApiError.js";
import Errors from "../../../../../shared/constants/errors.js";

import * as moduleRepository from "../../repositories/module.repository.js";

const getModuleBySlugService = async (
  slug
) => {
  const module =
    await moduleRepository.findModuleBySlug(
      slug
    );

  if (!module) {
    throw new ApiError(
      404,
      Errors.MODULE_NOT_FOUND
    );
  }

  return module;
};

export default getModuleBySlugService;