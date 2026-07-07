import ApiError from "../../../../../shared/ApiError.js";

import * as learningPathRepository from "../repositories/learningPath.repository.js";

import learningPathDto from "../dto/learningPath.dto.js";
import Errors from "../../../../../shared/constants/errors.js";

const getLearningPathBySlugService = async (slug) => {
  const learningPath =
    await learningPathRepository.findLearningPathBySlug(slug);

  if (!learningPath) {
    throw new ApiError(
      404,
      Errors.LEARNING_PATH_NOT_FOUND
    );
  }

  return learningPathDto(learningPath);
};

export default getLearningPathBySlugService;