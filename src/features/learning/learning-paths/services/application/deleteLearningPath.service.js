import * as learningPathRepository from "../../repositories/learningPath.repository.js";

import ensureLearningPathExists from "../domain/ensureLearningPathExists.service.js";

const deleteLearningPathService = async (
  id,
  userId
) => {
  await ensureLearningPathExists(id);

  await learningPathRepository.softDeleteLearningPath(
    id,
    userId
  );
};

export default deleteLearningPathService;