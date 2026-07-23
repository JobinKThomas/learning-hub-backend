import ensureInterviewQuestionExists from "../domain/ensureInterviewQuestionExists.service.js";

const getInterviewQuestionByIdService = async (
  id
) => {
  return ensureInterviewQuestionExists(id);
};

export default getInterviewQuestionByIdService;