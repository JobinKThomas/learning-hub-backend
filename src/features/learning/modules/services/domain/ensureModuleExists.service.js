import ApiError from "../../../../../shared/ApiError.js";
import Messages from "../../../../../shared/constants/messages.js";

import * as moduleRepository from "../../../modules/repositories/module.repository.js";

const ensureModuleExists = async (moduleId) => {
  const module = await moduleRepository.findModuleById(moduleId);

  if (!module) {
    throw new ApiError(
      404,
      Messages.MODULE_NOT_FOUND
    );
  }

  return module;
};

export default ensureModuleExists;