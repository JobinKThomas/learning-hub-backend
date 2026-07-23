import ensureInterviewQuestionExists from "../domain/ensureInterviewQuestionExists.service.js";

import * as interviewQuestionRepository from "../../repositories/interviewQuestion.repository.js";

const deleteInterviewQuestionService = async (
  id,
  userId
) => {
  await ensureInterviewQuestionExists(id);

  await interviewQuestionRepository.updateInterviewQuestion(
    id,
    {
      deletedAt: new Date(),
      updatedBy: userId,
    }
  );
};

export default deleteInterviewQuestionService;