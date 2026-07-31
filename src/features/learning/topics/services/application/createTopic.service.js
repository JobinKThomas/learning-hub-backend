import * as topicRepository from "../../repositories/topic.repository.js";

import ensureLearningPathExists from "../../../learning-paths/services/domain/ensureLearningPathExists.service.js";
import ensureModuleExists from "../../../modules/services/domain/ensureModuleExists.service.js";
import ensureSectionExists from "../../../sections/services/domain/ensureSectionExists.service.js";

import generateUniqueTopicSlug from "../domain/generateUniqueTopicSlug.service.js";

const createTopicService = async (
  payload,
  userId
) => {
  await ensureLearningPathExists(
    payload.learningPath
  );

  await ensureModuleExists(
    payload.module
  );

  await ensureSectionExists(
    payload.section
  );

  const slug =
    await generateUniqueTopicSlug(
      payload.title
    );
  const section = await ensureSectionExists(payload.section);
  payload.module = section.module;
  payload.learningPath = section.learningPath;

  return topicRepository.createTopic({
    ...payload,
    slug,
    createdBy: userId,
    updatedBy: userId,
  });
};

export default createTopicService;