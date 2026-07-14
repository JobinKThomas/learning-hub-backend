import ApiError from "../../../../../shared/ApiError.js";

import sectionDto from "../../dto/section.dto.js";

import * as sectionRepository from "../../repositories/section.repository.js";

const updateSectionStatusService = async (
  sectionId,
  status,
  userId
) => {
  const section =
    await sectionRepository.findSectionById(sectionId);

  if (!section) {
    throw new ApiError(
      404,
      "Section not found"
    );
  }

  const updatedSection =
    await sectionRepository.updateSection(
      sectionId,
      {
        status,
        updatedBy: userId,
      }
    );

  return sectionDto(updatedSection);
};

export default updateSectionStatusService;