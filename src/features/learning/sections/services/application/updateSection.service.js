import * as sectionRepository from "../../repositories/section.repository.js";

import ensureLearningPathExists from "../../../learning-paths/services/domain/ensureLearningPathExists.service.js";
import ensureModuleExists from "../../../modules/services/domain/ensureModuleExists.service.js";

import ensureSectionExists from "../domain/ensureSectionExists.service.js";
import validateParentSection from "../domain/validateParentSection.service.js";
import calculateSectionLevel from "../domain/calculateSectionLevel.service.js";

import generateUniqueSlug from "../../../../../shared/services/generateUniqueSlug.service.js";

const updateSectionService = async (
  id,
  payload,
  userId
) => {
  // Ensure section exists
  const section =
    await ensureSectionExists(id);

  // Default values
  let learningPathId =
    section.learningPath;

  let moduleId =
    section.module;

  let parentSection =
    null;

  let level =
    section.level;

  const updatePayload = {
    ...payload,
  };

  /**
   * Learning Path Changed
   */
  if (
    payload.learningPath &&
    payload.learningPath.toString() !==
      section.learningPath.toString()
  ) {
    await ensureLearningPathExists(
      payload.learningPath
    );

    learningPathId =
      payload.learningPath;
  }

  /**
   * Module Changed
   */
  if (
    payload.module &&
    payload.module.toString() !==
      section.module.toString()
  ) {
    await ensureModuleExists(
      payload.module
    );

    moduleId =
      payload.module;
  }

  /**
   * Parent Changed
   */
  if (
    payload.parentSection !== undefined &&
    payload.parentSection?.toString() !==
      section.parentSection?.toString()
  ) {
    if (payload.parentSection) {
      parentSection =
        await ensureSectionExists(
          payload.parentSection
        );

      validateParentSection({
        parentSection,
        learningPathId,
        moduleId,
      });

      level =
        calculateSectionLevel(
          parentSection
        );
    } else {
      // Root Section
      level = 1;
    }

    updatePayload.level = level;
  }

  /**
   * Title Changed
   */
  if (
    payload.title &&
    payload.title !== section.title
  ) {
    updatePayload.slug =
      await generateUniqueSlug({
        repository:
          sectionRepository,
        title: payload.title,
        excludeId: id,
      });
  }

  updatePayload.updatedBy =
    userId;

  const updatedSection =
    await sectionRepository.updateSection(
      id,
      updatePayload
    );

  return updatedSection;
};

export default updateSectionService;

// import ApiError from "../../../../../shared/ApiError.js";

// import sectionDto from "../../dto/section.dto.js";

// import * as sectionRepository from "../../repositories/section.repository.js";

// import calculateSectionLevel from "../domain/calculateSectionLevel.service.js";
// import calculateSectionPath from "../domain/calculateSectionPath.service.js";
// import generateUniqueSlug from "../domain/generateUniqueSlug.service.js";

// const updateSectionService = async (
//   sectionId,
//   payload,
//   userId
// ) => {
//   const section =
//     await sectionRepository.findSectionById(sectionId);

//   if (!section) {
//     throw new ApiError(404, "Section not found");
//   }

//   const updatePayload = {
//     ...payload,
//     updatedBy: userId,
//   };

//   if (
//     payload.title &&
//     payload.title !== section.title
//   ) {
//     updatePayload.slug =
//       await generateUniqueSlug(
//         payload.title,
//         sectionId
//       );
//   }

//   if (
//     payload.parentSection !== undefined
//   ) {
//     let parentSection = null;

//     if (payload.parentSection) {
//       parentSection =
//         await sectionRepository.findSectionById(
//           payload.parentSection
//         );

//       if (!parentSection) {
//         throw new ApiError(
//           404,
//           "Parent Section not found"
//         );
//       }
//     }

//     updatePayload.level =
//       calculateSectionLevel(parentSection);

//     updatePayload.path =
//       calculateSectionPath(parentSection);
//   }

//   const updatedSection =
//     await sectionRepository.updateSection(
//       sectionId,
//       updatePayload
//     );

//   return sectionDto(updatedSection);
// };

// export default updateSectionService;