import ApiError from "../../../../../shared/ApiError.js";

import learningPathPresenter from "../presenters/learningPath.presenter.js";

import * as learningPathRepository from "../repositories/learningPath.repository.js";

import generateUniqueSlug from "../domain/generateUniqueSlug.service.js";
import Errors from "../../../../../shared/constants/errors.js";

const updateLearningPathService = async (
  id,
  payload,
  userId
) => {
  const learningPath =
    await learningPathRepository.findLearningPathById(id);

  if (!learningPath) {
    throw new ApiError(
      404,
      Errors.LEARNING_PATH_NOT_FOUND
    );
  }

  const updateData = {
    ...payload,
    updatedBy: userId,
  };

  if (
    payload.title &&
    payload.title !== learningPath.title
  ) {
    updateData.slug =
      await generateUniqueSlug(payload.title);
  }

  const updatedLearningPath =
    await learningPathRepository.updateLearningPath(
      id,
      updateData
    );

  return learningPathPresenter(updatedLearningPath);
};

export default updateLearningPathService;