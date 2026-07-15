import ApiError from "../../../../../shared/ApiError.js";
import Errors from "../../../../../shared/constants/errors.js";

const validateParentSection = (
  parentSection,
  learningPathId,
  moduleId
) => {
  if (!parentSection) {
    return;
  }

  if (
    parentSection.learningPath.toString() !==
    learningPathId.toString()
  ) {
    throw new ApiError(
      400,
      Errors.INVALID_PARENT_SECTION
    );
  }

  if (
    parentSection.module.toString() !==
    moduleId.toString()
  ) {
    throw new ApiError(
      400,
      Errors.INVALID_PARENT_SECTION
    );
  }
};

export default validateParentSection;