import * as learningPathRepository from "../../repositories/learningPath.repository.js";

import ensureLearningPathExists from "../domain/ensureLearningPathExists.service.js";

const updateLearningPathStatusService = async (
  id,
  status,
  userId
) => {
  await ensureLearningPathExists(id);

  return learningPathRepository.updateLearningPath(
    id,
    {
      status,
      updatedBy: userId,
    }
  );
};

export default updateLearningPathStatusService;