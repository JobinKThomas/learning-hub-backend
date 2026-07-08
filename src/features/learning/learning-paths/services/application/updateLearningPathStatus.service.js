
import ApiError from "../../../../../shared/ApiError.js";
import learningPathPresenter from "../presenters/learningPath.presenter.js";

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

  return learningPathPresenter(updatedLearningPath);
};

export default updateLearningPathStatusService;