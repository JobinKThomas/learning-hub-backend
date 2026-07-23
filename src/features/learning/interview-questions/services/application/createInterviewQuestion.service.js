import * as interviewQuestionRepository from "../../repositories/interviewQuestion.repository.js";

import ensureTopicExists from "../../../topics/services/domain/ensureTopicExists.service.js";

const createInterviewQuestionService = async (
  payload,
  userId
) => {
  await ensureTopicExists(payload.topic);

  const interviewQuestion =
    await interviewQuestionRepository.createInterviewQuestion({
      ...payload,
      createdBy: userId,
    });

  return interviewQuestion;
};

export default createInterviewQuestionService;