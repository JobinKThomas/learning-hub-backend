import ApiError from "../../../../../shared/ApiError.js";

import * as quizRepository from "../../repositories/quiz.repository.js";

const ensureQuizExists = async (
  id
) => {
  const quiz =
    await quizRepository.findQuizById(
      id
    );

  if (!quiz) {
    throw new ApiError(
      404,
      "Quiz not found."
    );
  }

  return quiz;
};

export default ensureQuizExists;