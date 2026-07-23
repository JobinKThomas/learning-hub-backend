import ApiError from "../../../../../../shared/ApiError.js";

import * as quizRepository from "../../../repositories/quiz.repository.js";

const getQuizBySlugService = async (
  slug
) => {
  const quiz =
    await quizRepository.findQuizBySlug(
      slug
    );

  if (!quiz) {
    throw new ApiError(
      404,
      "Quiz not found."
    );
  }

  return quiz;
};

export default getQuizBySlugService;