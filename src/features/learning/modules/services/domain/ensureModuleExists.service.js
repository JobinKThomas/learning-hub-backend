import ApiError from "../../../../../shared/ApiError.js";
import Errors from "../../../../../shared/constants/errors.js";

import * as moduleRepository from "../../repositories/module.repository.js";

const ensureModuleExists = async (moduleId) => {
  const module = await moduleRepository.findModuleById(moduleId);

  if (!module) {
    throw new ApiError(
      404,
      Errors.MODULE_NOT_FOUND
    );
  }

  return module;
};

export default ensureModuleExists;