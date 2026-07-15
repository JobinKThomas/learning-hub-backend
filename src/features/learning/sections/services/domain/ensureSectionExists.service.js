import ApiError from "../../../../../shared/ApiError.js";

import Errors from "../../../../../shared/constants/errors.js";

import * as sectionRepository from "../../repositories/section.repository.js";

const ensureSectionExists = async (
  sectionId
) => {
  const section =
    await sectionRepository.findSectionById(
      sectionId
    );

  if (!section) {
    throw new ApiError(
      404,
      Errors.SECTION_NOT_FOUND
    );
  }

  return section;
};

export default ensureSectionExists;