import ensureLearningPathExists from "../../../learning-paths/services/domain/ensureLearningPathExists.service.js";

import generateUniqueModuleSlug from "../domain/generateUniqueModuleSlug.service.js";

import * as moduleRepository from "../../repositories/module.repository.js";

const createModuleService = async (
  payload,
  userId
) => {
  const learningPath =
    await ensureLearningPathExists(
      payload.learningPath
    );

  const slug =
    await generateUniqueModuleSlug(
      `${learningPath.slug}-${payload.title}`
    );

  return moduleRepository.createModule({
    ...payload,
    slug,
    createdBy: userId,
    updatedBy: userId,
  });
};

export default createModuleService;