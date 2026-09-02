import ensurePlaygroundExists from "../domain/ensurePlaygroundExists.service.js";

import updateTopicProgress from "../../../progress/services/domain/updateTopicProgress.service.js";

import ProgressType from "../../../../../shared/enums/progressType.enum.js";

const completePlaygroundService = async ({
  playgroundId,
  userId,
}) => {
  const playground =
    await ensurePlaygroundExists(playgroundId);

  return updateTopicProgress({
    userId,
    topicId: playground.topic,
    type: ProgressType.PLAYGROUND,
  });
};

export default completePlaygroundService;