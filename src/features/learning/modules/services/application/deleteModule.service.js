import ApiError from "../../../../../shared/ApiError.js";

import * as moduleRepository from "../../repositories/module.repository.js";

const deleteModuleService = async ({
  id,
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

  await moduleRepository.softDeleteModule(
    id,
    userId
  );
};

export default deleteModuleService;