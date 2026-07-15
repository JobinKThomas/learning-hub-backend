import ensureTopicExists from "../domain/ensureTopicExists.service.js";

import * as topicRepository from "../../repositories/topic.repository.js";

const deleteTopicService = async (
  id,
  userId
) => {
  await ensureTopicExists(id);

  await topicRepository.softDeleteTopic(
    id,
    userId
  );
};

export default deleteTopicService;