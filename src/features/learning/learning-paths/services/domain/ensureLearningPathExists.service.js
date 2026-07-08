import ApiError from "../../../../../shared/ApiError.js";

import * as learningPathRepository from "../../repositories/learningPath.repository.js";

const ensureLearningPathExists = async (id) => {
  const learningPath =
    await learningPathRepository.findLearningPathById(id);

  if (!learningPath) {
    throw new ApiError(
      404,
      "Learning Path not found"
    );
  }

  return learningPath;
};

export default ensureLearningPathExists;