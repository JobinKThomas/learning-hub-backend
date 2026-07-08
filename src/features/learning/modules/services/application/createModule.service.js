import ApiError from "../../../../../shared/ApiError.js";

import moduleDto from "../../dto/module.dto.js";

import * as moduleRepository from "../../repositories/module.repository.js";
import * as learningPathRepository from "../../../learning-paths/repositories/learningPath.repository.js";

import generateUniqueSlug from "../../../learning-paths/services/domain/generateUniqueSlug.service.js";

const createModuleService = async (
  payload,
  userId
) => {
  const learningPath =
    await learningPathRepository.findLearningPathById(
      payload.learningPath
    );

  if (!learningPath) {
    throw new ApiError(
      404,
      "Learning Path not found"
    );
  }

  const slug = await generateUniqueSlug(
    `${learningPath.slug}-${payload.title}`
  );

  const module =
    await moduleRepository.createModule({
      ...payload,
      slug,
      createdBy: userId,
      updatedBy: userId,
    });

  return moduleDto(module);
};

export default createModuleService;