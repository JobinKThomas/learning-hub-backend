import ApiError from "../../../../../shared/ApiError.js";

import moduleDto from "../../dto/module.dto.js";

import * as moduleRepository from "../../repositories/module.repository.js";

import ensureLearningPathExists from "../../../learning-paths/services/domain/ensureLearningPathExists.service.js";

import generateUniqueSlug from "../../../learning-paths/services/domain/generateUniqueSlug.service.js";

const updateModuleService = async ({
  id,
  payload,
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

  const updateData = {
    ...payload,
    updatedBy: userId,
  };

  if (
    payload.learningPath &&
    payload.learningPath.toString() !==
      module.learningPath.toString()
  ) {
    await ensureLearningPathExists(
      payload.learningPath
    );

    updateData.learningPath =
      payload.learningPath;
  }

  if (
    payload.title &&
    payload.title !== module.title
  ) {
    const learningPathId =
      updateData.learningPath ??
      module.learningPath;

    const learningPath =
      await ensureLearningPathExists(
        learningPathId
      );

    updateData.slug =
      await generateUniqueSlug({
        repository: moduleRepository,
        title: payload.title,
        prefix: learningPath.slug,
      });
  }

  const updatedModule =
    await moduleRepository.updateModule(
      id,
      updateData
    );

  return moduleDto(updatedModule);
};

export default updateModuleService;