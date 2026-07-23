import * as questionRepository from "../../../repositories/quizQuestion.repository.js";

import ensureQuizExists from "../../domain/ensureQuizExists.service.js";

const createQuestionService = async (
  payload,
  userId
) => {
  await ensureQuizExists(payload.quiz);

  const question =
    await questionRepository.createQuestion({
      ...payload,
      createdBy: userId,
    });

  return question;
};

export default createQuestionService;