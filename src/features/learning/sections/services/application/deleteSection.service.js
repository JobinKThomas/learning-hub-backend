import ensureSectionExists from "../domain/ensureSectionExists.service.js";

import * as sectionRepository from "../../repositories/section.repository.js";

const deleteSectionService = async (
  id,
  userId
) => {
  const section =
    await ensureSectionExists(id);

  if (section.parentSection) {
    await sectionRepository.decrementChildrenCount(
      section.parentSection
    );
  }

  await sectionRepository.softDeleteSection(
    id,
    userId
  );
};

export default deleteSectionService;