import ApiError from "../../../../../shared/ApiError.js";

import ContentStatus from "../../../../../shared/enums/contentStatus.enum.js";
import Visibility from "../../../../../shared/enums/visibility.enum.js";

import Messages from "../../../../../shared/constants/messages.js";

import learningPathPresenter from "../../presenters/public/learningPath.presenter.js";

import * as learningPathRepository from "../../repositories/learningPath.repository.js";

const getLearningPathBySlugService = async (slug) => {
  const learningPath =
    await learningPathRepository.findLearningPathBySlug(
      slug,
      {
        status: ContentStatus.PUBLISHED,
        visibility: Visibility.PUBLIC,
      }
    );

  if (!learningPath) {
    throw new ApiError(
      404,
      Messages.LEARNING_PATH_NOT_FOUND
    );
  }

  return learningPathPresenter(learningPath);
};

export default getLearningPathBySlugService;