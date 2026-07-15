import * as topicRepository from "../../repositories/topic.repository.js";

import ensureTopicExists from "../domain/ensureTopicExists.service.js";
import ensureLearningPathExists from "../../../learning-paths/services/domain/ensureLearningPathExists.service.js";
import ensureModuleExists from "../../../modules/services/domain/ensureModuleExists.service.js";
import ensureSectionExists from "../../../sections/services/domain/ensureSectionExists.service.js";

import generateUniqueTopicSlug from "../domain/generateUniqueTopicSlug.service.js";

const updateTopicService = async (
  id,
  payload,
  userId
) => {
  const topic =
    await ensureTopicExists(id);

  if (
    payload.learningPath &&
    payload.learningPath.toString() !==
      topic.learningPath.toString()
  ) {
    await ensureLearningPathExists(
      payload.learningPath
    );
  }

  if (
    payload.module &&
    payload.module.toString() !==
      topic.module.toString()
  ) {
    await ensureModuleExists(
      payload.module
    );
  }

  if (
    payload.section &&
    payload.section.toString() !==
      topic.section.toString()
  ) {
    await ensureSectionExists(
      payload.section
    );
  }

  const updatePayload = {
    ...payload,
    updatedBy: userId,
  };

  if (
    payload.title &&
    payload.title !== topic.title
  ) {
    updatePayload.slug =
      await generateUniqueTopicSlug(
        payload.title,
        id
      );
  }

  return topicRepository.updateTopic(
    id,
    updatePayload
  );
};

export default updateTopicService;