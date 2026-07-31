import ApiError from "../../../../../shared/ApiError.js";
import {Messages} from "../../../../../shared/constants/messages.js"

import * as interviewQuestionRepository from "../../repositories/interviewQuestion.repository.js";

const ensureInterviewQuestionExists = async (id) => {
  const interviewQuestion =
    await interviewQuestionRepository.findInterviewQuestionById(
      id
    );

  if (!interviewQuestion) {
    throw new ApiError(
      404,
      Messages.INTERVIEW_QUESTION_NOT_FOUND
    );
  }

  return interviewQuestion;
};

export default ensureInterviewQuestionExists;