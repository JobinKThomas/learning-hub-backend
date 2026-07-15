import * as sectionRepository from "../../repositories/section.repository.js";

import ensureLearningPathExists from "../../../learning-paths/services/domain/ensureLearningPathExists.service.js";
import ensureModuleExists from "../../../modules/services/domain/ensureModuleExists.service.js";

import ensureSectionExists from "../domain/ensureSectionExists.service.js";
import validateParentSection from "../domain/validateParentSection.service.js";
import calculateSectionLevel from "../domain/calculateSectionLevel.service.js";
import buildSectionPath from "../domain/buildSectionPath.service.js";
import generateUniqueSectionSlug from "../domain/generateUniqueSectionSlug.service.js";

const createSectionService = async (
  payload,
  userId
) => {
  await ensureLearningPathExists(
    payload.learningPath
  );

  await ensureModuleExists(
    payload.module
  );

  let parentSection = null;

  if (payload.parentSection) {
    parentSection =
      await ensureSectionExists(
        payload.parentSection
      );

    validateParentSection(
      parentSection,
      payload.learningPath,
      payload.module
    );
  }

  const level =
    calculateSectionLevel(
      parentSection
    );

  const path =
    buildSectionPath(
      parentSection
    );

  const slug =
    await generateUniqueSectionSlug(
      payload.title
    );

  return sectionRepository.createSection({
    ...payload,
    level,
    path,
    slug,
    createdBy: userId,
    updatedBy: userId,
  });
};

export default createSectionService;