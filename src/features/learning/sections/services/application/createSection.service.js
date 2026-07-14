import * as sectionRepository from "../repositories/section.repository.js";

import ensureLearningPathExists from "../../../learning-paths/services/domain/ensureLearningPathExists.service.js";
import ensureModuleExists from "../../../modules/services/domain/ensureModuleExists.service.js";

import ensureSectionExists from "../domain/ensureSectionExists.service.js";
import validateParentSection from "../domain/validateParentSection.service.js";
import calculateSectionLevel from "../domain/calculateSectionLevel.service.js";

import generateUniqueSlug from "../../../learning-paths/services/domain/generateUniqueSlug.service.js"

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

    validateParentSection({
      parentSection,
      learningPathId:
        payload.learningPath,
      moduleId:
        payload.module,
    });
  }

  const level =
    calculateSectionLevel(
      parentSection
    );

  const slug =
    await generateUniqueSlug({
      repository:
        sectionRepository,
      title: payload.title,
    });

  const section =
    await sectionRepository.createSection({
      ...payload,
      level,
      slug,
      createdBy: userId,
    });

  return section;
};

export default createSectionService;