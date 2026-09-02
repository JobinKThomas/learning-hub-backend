import ensureNoteExists from "../domain/ensureNoteExists.service.js";

import updateTopicProgress from "../../../progress/services/domain/updateTopicProgress.service.js";
import ProgressType from "../../../../../shared/enums/progressType.enum.js";

const completeNoteService = async ({
  noteId,
  userId,
}) => {
  const note =
    await ensureNoteExists(noteId);

  return updateTopicProgress({
    userId,
    topicId: note.topic,
    type: ProgressType.NOTE,
  });
};

export default completeNoteService;