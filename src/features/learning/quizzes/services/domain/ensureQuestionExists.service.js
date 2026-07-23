import ApiError from "../../../../../shared/ApiError.js";

import * as questionRepository from "../../repositories/quizQuestion.repository.js";

const ensureQuestionExists = async (
  id
) => {
  const question =
    await questionRepository.findQuestionById(
      id
    );

  if (!question) {
    throw new ApiError(
      404,
      "Question not found."
    );
  }

  return question;
};

export default ensureQuestionExists;