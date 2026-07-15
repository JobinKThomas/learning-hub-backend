import * as moduleRepository from "../../repositories/module.repository.js";

import ensureModuleExists from "../domain/ensureModuleExists.service.js";
import ensureLearningPathExists from "../../../learning-paths/services/domain/ensureLearningPathExists.service.js";

import generateUniqueModuleSlug from "../domain/generateUniqueModuleSlug.service.js";

const updateModuleService = async (
  id,
  payload,
  userId
) => {
  const module =
    await ensureModuleExists(id);

  const updateData = {
    ...payload,
    updatedBy: userId,
  };

  let learningPath =
    await ensureLearningPathExists(
      payload.learningPath ??
      module.learningPath
    );

  if (
    payload.title &&
    payload.title !== module.title
  ) {
    updateData.slug =
      await generateUniqueModuleSlug(
        `${learningPath.slug}-${payload.title}`,
        module._id
      );
  }

  return moduleRepository.updateModule(
    id,
    updateData
  );
};

export default updateModuleService;