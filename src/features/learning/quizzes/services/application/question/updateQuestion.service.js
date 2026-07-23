import * as questionRepository from "../../../repositories/quizQuestion.repository.js";

import ensureQuestionExists from "../../domain/ensureQuestionExists.service.js";
import ensureQuizExists from "../../domain/ensureQuizExists.service.js";

const updateQuestionService = async (
  id,
  payload,
  userId
) => {
  const question =
    await ensureQuestionExists(id);

  if (
    payload.quiz &&
    payload.quiz.toString() !==
      question.quiz.toString()
  ) {
    await ensureQuizExists(
      payload.quiz
    );
  }

  return questionRepository.updateQuestion(
    id,
    {
      ...payload,
      updatedBy: userId,
    }
  );
};

export default updateQuestionService;