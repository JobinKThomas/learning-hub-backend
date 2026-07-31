import ApiError from "../../../../../shared/ApiError.js";
import Errors from "../../../../../shared/constants/errors.js";

import * as learningPathRepository from "../../repositories/learningPath.repository.js";

const getLearningPathBySlugService = async (
  slug
) => {
  const learningPath =
    await learningPathRepository.findLearningPathBySlug(
      slug
    );

  if (!learningPath) {
    throw new ApiError(
      404,
      Errors.LEARNING_PATH_NOT_FOUND
    );
  }

  return learningPath;
};

export default getLearningPathBySlugService;