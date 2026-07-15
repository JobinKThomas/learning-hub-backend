import * as topicRepository from "../../repositories/topic.repository.js";

import ensureTopicExists from "../domain/ensureTopicExists.service.js";

const updateTopicStatusService = async (
  id,
  status,
  userId
) => {
  await ensureTopicExists(id);

  return topicRepository.updateTopic(
    id,
    {
      status,
      updatedBy: userId,
    }
  );
};

export default updateTopicStatusService;