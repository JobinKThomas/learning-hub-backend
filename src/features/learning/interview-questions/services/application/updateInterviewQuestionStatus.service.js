import ensureInterviewQuestionExists from "../domain/ensureInterviewQuestionExists.service.js";

import * as interviewQuestionRepository from "../../repositories/interviewQuestion.repository.js";

const updateInterviewQuestionStatusService = async (
  id,
  status,
  userId
) => {
  await ensureInterviewQuestionExists(id);

  return interviewQuestionRepository.updateInterviewQuestion(
    id,
    {
      status,
      updatedBy: userId,
    }
  );
};

export default updateInterviewQuestionStatusService;