import ApiError from "../../../../../shared/ApiError.js";

const validateParentSection = ({
  parentSection,
  learningPathId,
  moduleId,
}) => {
  if (!parentSection) {
    return;
  }

  if (
    parentSection.learningPath.toString() !==
    learningPathId.toString()
  ) {
    throw new ApiError(
      400,
      "Parent section belongs to another learning path"
    );
  }

  if (
    parentSection.module.toString() !==
    moduleId.toString()
  ) {
    throw new ApiError(
      400,
      "Parent section belongs to another module"
    );
  }
};

export default validateParentSection;