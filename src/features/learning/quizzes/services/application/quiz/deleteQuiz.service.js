import ensureQuizExists from "../../domain/ensureQuizExists.service.js";

import * as quizRepository from "../../../repositories/quiz.repository.js";

const deleteQuizService = async (
  id,
  userId
) => {
  await ensureQuizExists(id);

  await quizRepository.updateQuiz(id, {
    deletedAt: new Date(),
    updatedBy: userId,
  });
};

export default deleteQuizService;