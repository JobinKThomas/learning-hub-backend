import * as learningPathRepository from "../../repositories/learningPath.repository.js";

import generateUniqueSlug from "../domain/generateUniqueSlug.service.js";

const createLearningPathService = async (
  payload,
  userId
) => {
  const slug =
    await generateUniqueSlug(payload.title);

  const learningPath =
    await learningPathRepository.createLearningPath({
      ...payload,
      slug,
      createdBy: userId,
      updatedBy: userId,
    });

  return learningPath;
};

export default createLearningPathService;