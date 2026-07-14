import ApiError from "../../../../../shared/ApiError.js";

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
      "Section not found"
    );
  }

  return section;
};

export default ensureSectionExists;