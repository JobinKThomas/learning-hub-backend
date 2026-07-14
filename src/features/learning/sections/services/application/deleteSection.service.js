import ApiError from "../../../../../shared/ApiError.js";

import * as sectionRepository from "../../repositories/section.repository.js";

const deleteSectionService = async ({
  id,
  userId,
}) => {
  const section =
    await sectionRepository.findSectionById(id);

  if (!section) {
    throw new ApiError(
      404,
      "Section not found"
    );
  }

  await sectionRepository.updateSection(
    id,
    {
      deletedAt: new Date(),
      updatedBy: userId,
    }
  );
};

export default deleteSectionService;