import ApiError from "../../../../../shared/ApiError.js";

import * as sectionRepository from "../../repositories/section.repository.js";

const getSectionBySlugService = async (
  slug
) => {
  const section =
    await sectionRepository.findSectionBySlug(
      slug
    );

  if (!section) {
    throw new ApiError(
      404,
      "Section not found"
    );
  }

  return section;
};

export default getSectionBySlugService;