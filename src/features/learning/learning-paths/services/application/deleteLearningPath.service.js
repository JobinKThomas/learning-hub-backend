import ApiError from "../../../../../shared/ApiError.js";
import * as learningPathRepository from "../repositories/learningPath.repository.js";

const deleteLearningPathService = async ({
  id,
  userId,
}) => {
  const learningPath =
    await learningPathRepository.findLearningPathById(id);

  if (!learningPath) {
    throw new ApiError(
      404,
      "Learning Path not found"
    );
  }

  await learningPathRepository.softDeleteLearningPath(
    id,
    userId
  );

  return;
};

export default deleteLearningPathService;