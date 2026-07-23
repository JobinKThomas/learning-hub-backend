import ensureQuizExists from "../../domain/ensureQuizExists.service.js";

import * as quizRepository from "../../../repositories/quiz.repository.js";

const updateQuizStatusService = async (
  id,
  status,
  userId
) => {
  await ensureQuizExists(id);

  return quizRepository.updateQuiz(id, {
    status,
    updatedBy: userId,
  });
};

export default updateQuizStatusService;