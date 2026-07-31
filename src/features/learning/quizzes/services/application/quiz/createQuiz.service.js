import * as quizRepository from "../../../repositories/quiz.repository.js";

import ensureTopicExists from "../../../../topics/services/domain/ensureTopicExists.service.js";

import generateUniqueSlug from "../../../../../../shared/services/generateUniqueSlug.service.js";

const createQuizService = async (
  payload,
  userId
) => {
  await ensureTopicExists(payload.topic);

  const slug = await generateUniqueSlug({
    repository: quizRepository,
    value: payload.title,
  });

  const quiz = await quizRepository.createQuiz({
    ...payload,
    slug,
    createdBy: userId,
  });

  return quiz;
};

export default createQuizService;