import * as learningPathRepository from "../../repositories/learningPath.repository.js";

import ensureLearningPathExists from "../domain/ensureLearningPathExists.service.js";
import generateUniqueSlug from "../domain/generateUniqueSlug.service.js";

const updateLearningPathService = async (
  id,
  payload,
  userId
) => {
  const learningPath =
    await ensureLearningPathExists(id);

  const updateData = {
    ...payload,
    updatedBy: userId,
  };

  if (
    payload.title &&
    payload.title !== learningPath.title
  ) {
    updateData.slug =
      await generateUniqueSlug(
        payload.title,
        learningPath._id
      );
  }

  return learningPathRepository.updateLearningPath(
    id,
    updateData
  );
};

export default updateLearningPathService;