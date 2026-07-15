import * as sectionRepository from "../../repositories/section.repository.js";

import ensureSectionExists from "../domain/ensureSectionExists.service.js";

const updateSectionStatusService = async (
  sectionId,
  status,
  userId
) => {
  await ensureSectionExists(sectionId);

  return sectionRepository.updateSection(
    sectionId,
    {
      status,
      updatedBy: userId,
    }
  );
};

export default updateSectionStatusService;