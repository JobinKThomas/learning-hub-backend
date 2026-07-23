import * as interviewQuestionRepository from "../../repositories/interviewQuestion.repository.js";

import ensureInterviewQuestionExists from "../domain/ensureInterviewQuestionExists.service.js";
import ensureTopicExists from "../../../topics/services/domain/ensureTopicExists.service.js";

const updateInterviewQuestionService = async (
  id,
  payload,
  userId
) => {
  const interviewQuestion =
    await ensureInterviewQuestionExists(id);

  if (
    payload.topic &&
    payload.topic.toString() !==
      interviewQuestion.topic.toString()
  ) {
    await ensureTopicExists(payload.topic);
  }

  return interviewQuestionRepository.updateInterviewQuestion(
    id,
    {
      ...payload,
      updatedBy: userId,
    }
  );
};

export default updateInterviewQuestionService;