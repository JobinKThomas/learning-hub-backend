import ApiError from "../../../../../shared/ApiError.js";

import ContentStatus from "../../../../../shared/enums/contentStatus.enum.js";
import Visibility from "../../../../../shared/enums/visibility.enum.js";

import {Messages} from "../../../../../shared/constants/messages.js";

import learningPathPresenter from "../../presenters/public/learningPath.presenter.js";
import modulePresenter from "../../../modules/presenters/public/module.presenter.js";

import * as learningPathRepository from "../../repositories/learningPath.repository.js";
import * as moduleRepository from "../../../modules/repositories/module.repository.js";

const getLearningPathModulesService = async (
  slug
) => {
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

  const modules =
    await moduleRepository.findModules({
      learningPath: learningPath._id,
      status: ContentStatus.PUBLISHED,
      visibility: Visibility.PUBLIC,
      limit: Number.MAX_SAFE_INTEGER,
      sort: "order",
    });

  return modules.map(modulePresenter);
};

export default getLearningPathModulesService;
