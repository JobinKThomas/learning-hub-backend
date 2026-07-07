
import ApiError from "../../../../../shared/ApiError.js";
import learningPathDto from "../dto/learningPath.dto.js";

import * as learningPathRepository from "../repositories/learningPath.repository.js";

const updateLearningPathStatusService = async (
  id,
  status,
  userId
) => {
  const learningPath =
    await learningPathRepository.findLearningPathById(id);

  if (!learningPath) {
    throw new ApiError(
      404,
      "Learning Path not found"
    );
  }

  const updatedLearningPath =
    await learningPathRepository.updateLearningPath(
      id,
      {
        status,
        updatedBy: userId,
      }
    );

  return learningPathDto(updatedLearningPath);
};

export default updateLearningPathStatusService;