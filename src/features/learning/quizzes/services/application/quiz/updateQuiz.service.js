import * as quizRepository from "../../../repositories/quiz.repository.js";

import ensureQuizExists from "../../domain/ensureQuizExists.service.js";
import ensureTopicExists from "../../../../topics/services/domain/ensureTopicExists.service.js";

import generateUniqueSlug from "../../../../../../shared/services/generateUniqueSlug.service.js";

const updateQuizService = async (
  id,
  payload,
  userId
) => {
  const quiz =
    await ensureQuizExists(id);

  const updatePayload = {
    ...payload,
  };

  if (
    payload.topic &&
    payload.topic.toString() !==
      quiz.topic.toString()
  ) {
    await ensureTopicExists(
      payload.topic
    );
  }

  if (
    payload.title &&
    payload.title !== quiz.title
  ) {
    updatePayload.slug =
      await generateUniqueSlug({
        repository: quizRepository,
        value: payload.title,
        excludeId: id,
      });
  }

  updatePayload.updatedBy = userId;

  return quizRepository.updateQuiz(
    id,
    updatePayload
  );
};

export default updateQuizService;