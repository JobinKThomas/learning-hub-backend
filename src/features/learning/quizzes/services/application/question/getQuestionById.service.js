import ensureQuestionExists from "../../domain/ensureQuestionExists.service.js";

const getQuestionByIdService =
  async (id) => {
    return ensureQuestionExists(id);
  };

export default getQuestionByIdService;