import ensureResourceExists from "../domain/ensureResourceExists.service.js";

import updateTopicProgress from "../../../progress/services/domain/updateTopicProgress.service.js";

import ProgressType from "../../../../../shared/enums/progressType.enum.js";

const completeResourceService = async ({
  resourceId,
  userId,
}) => {
  /**
   * Make sure resource exists.
   */
  const resource =
    await ensureResourceExists(resourceId);

  /**
   * Mark RESOURCE as completed
   * for the resource's topic.
   */
  return updateTopicProgress({
    userId,
    topicId: resource.topic,
    type: ProgressType.RESOURCE,
  });
};

export default completeResourceService;