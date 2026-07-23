import ensureQuestionExists from "../../domain/ensureQuestionExists.service.js";

import * as questionRepository from "../../../repositories/quizQuestion.repository.js";

const deleteQuestionService = async (
  id,
  userId
) => {
  await ensureQuestionExists(id);

  await questionRepository.updateQuestion(
    id,
    {
      deletedAt: new Date(),
      updatedBy: userId,
    }
  );
};

export default deleteQuestionService;