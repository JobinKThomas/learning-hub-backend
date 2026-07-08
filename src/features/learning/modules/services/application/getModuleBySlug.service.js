import ApiError from "../../../../../shared/ApiError.js";

import moduleDto from "../../dto/module.dto.js";

import * as moduleRepository from "../../repositories/module.repository.js";

const getModuleBySlugService = async (slug) => {
  const module =
    await moduleRepository.findModuleBySlug(slug);

  if (!module) {
    throw new ApiError(
      404,
      "Module not found"
    );
  }

  return moduleDto(module);
};

export default getModuleBySlugService;