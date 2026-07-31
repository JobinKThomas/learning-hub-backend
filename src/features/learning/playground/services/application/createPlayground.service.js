import * as playgroundRepository from "../../repositories/playground.repository.js";

import ensureTopicExists from "../../../topics/services/domain/ensureTopicExists.service.js";

import generateUniqueSlug from "../../../../../shared/services/generateUniqueSlug.service.js";

const createPlaygroundService = async (
  payload,
  userId
) => {
  await ensureTopicExists(
    payload.topic
  );

  const slug =
    await generateUniqueSlug({
      repository: playgroundRepository,
      value: payload.title,
    });

  const playground =
    await playgroundRepository.createPlayground(
      {
        ...payload,
        slug,
        createdBy: userId,
      }
    );

  return playground;
};

export default createPlaygroundService;