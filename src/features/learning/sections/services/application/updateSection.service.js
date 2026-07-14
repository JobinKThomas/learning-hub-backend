import ApiError from "../../../../../shared/ApiError.js";

import sectionDto from "../../dto/section.dto.js";

import * as sectionRepository from "../../repositories/section.repository.js";

import calculateSectionLevel from "../domain/calculateSectionLevel.service.js";
import calculateSectionPath from "../domain/calculateSectionPath.service.js";
import generateUniqueSlug from "../domain/generateUniqueSlug.service.js";

const updateSectionService = async (
  sectionId,
  payload,
  userId
) => {
  const section =
    await sectionRepository.findSectionById(sectionId);

  if (!section) {
    throw new ApiError(404, "Section not found");
  }

  const updatePayload = {
    ...payload,
    updatedBy: userId,
  };

  if (
    payload.title &&
    payload.title !== section.title
  ) {
    updatePayload.slug =
      await generateUniqueSlug(
        payload.title,
        sectionId
      );
  }

  if (
    payload.parentSection !== undefined
  ) {
    let parentSection = null;

    if (payload.parentSection) {
      parentSection =
        await sectionRepository.findSectionById(
          payload.parentSection
        );

      if (!parentSection) {
        throw new ApiError(
          404,
          "Parent Section not found"
        );
      }
    }

    updatePayload.level =
      calculateSectionLevel(parentSection);

    updatePayload.path =
      calculateSectionPath(parentSection);
  }

  const updatedSection =
    await sectionRepository.updateSection(
      sectionId,
      updatePayload
    );

  return sectionDto(updatedSection);
};

export default updateSectionService;