import ApiError from "../../../../../shared/ApiError.js";

import * as moduleRepository from "../../repositories/module.repository.js";

const updateModuleStatusService = async ({
  id,
  status,
  userId,
}) => {
  const module =
    await moduleRepository.findModuleById(id);

  if (!module) {
    throw new ApiError(
      404,
      "Module not found"
    );
  }

  return moduleRepository.updateModule(
    id,
    {
      status,
      updatedBy: userId,
    }
  );
};

export default updateModuleStatusService;