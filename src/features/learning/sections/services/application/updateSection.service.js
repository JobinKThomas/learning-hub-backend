import * as sectionRepository from "../../repositories/section.repository.js";

import ensureLearningPathExists from "../../../learning-paths/services/domain/ensureLearningPathExists.service.js";
import ensureModuleExists from "../../../modules/services/domain/ensureModuleExists.service.js";

import ensureSectionExists from "../domain/ensureSectionExists.service.js";
import validateParentSection from "../domain/validateParentSection.service.js";
import calculateSectionLevel from "../domain/calculateSectionLevel.service.js";
import buildSectionPath from "../domain/buildSectionPath.service.js";
import generateUniqueSectionSlug from "../domain/generateUniqueSectionSlug.service.js";

const updateSectionService = async (
  id,
  payload,
  userId
) => {
  const section =
    await ensureSectionExists(id);

  const learningPathId =
    payload.learningPath ??
    section.learningPath;

  const moduleId =
    payload.module ??
    section.module;

  if (
    payload.learningPath &&
    payload.learningPath.toString() !==
      section.learningPath.toString()
  ) {
    await ensureLearningPathExists(
      payload.learningPath
    );
  }

  if (
    payload.module &&
    payload.module.toString() !==
      section.module.toString()
  ) {
    await ensureModuleExists(
      payload.module
    );
  }

  const updatePayload = {
    ...payload,
    updatedBy: userId,
  };

  /**
   * Parent Changed
   */
  if (
    payload.parentSection !== undefined &&
    payload.parentSection?.toString() !==
      section.parentSection?.toString()
  ) {
    let parentSection = null;

    if (payload.parentSection) {
      parentSection =
        await ensureSectionExists(
          payload.parentSection
        );

      validateParentSection(
        parentSection,
        learningPathId,
        moduleId
      );
    }

    updatePayload.level =
      calculateSectionLevel(
        parentSection
      );

    updatePayload.path =
      buildSectionPath(
        parentSection
      );

    /**
     * Update parent children counts
     */
    if (section.parentSection) {
      await sectionRepository.decrementChildrenCount(
        section.parentSection
      );
    }

    if (parentSection) {
      await sectionRepository.incrementChildrenCount(
        parentSection._id
      );
    }
  }

  /**
   * Title Changed
   */
  if (
    payload.title &&
    payload.title !== section.title
  ) {
    updatePayload.slug =
      await generateUniqueSectionSlug(
        payload.title,
        id
      );
  }

  const updatedSection =
    await sectionRepository.updateSection(
      id,
      updatePayload
    );

  return updatedSection;
};

export default updateSectionService;