import notePresenter from "../../presenters/note.presenter.js";

import * as noteRepository from "../../repositories/note.repository.js";

import ensureNoteExists from "../domain/ensureNoteExists.service.js";
import ensureTopicExists from "../../../topics/services/domain/ensureTopicExists.service.js";
import generateUniqueNoteSlug from "../domain/generateUniqueNoteSlug.service.js";

import {
  processMarkdown,
} from "../../../../../shared/content/index.js";

const updateNoteService = async ({
  id,
  payload,
  userId,
}) => {
  const note = await ensureNoteExists(id);

  const updatePayload = {
    ...payload,
    updatedBy: userId,
  };

  /**
   * Topic Changed
   */
  if (
    payload.topic &&
    payload.topic.toString() !==
      note.topic.toString()
  ) {
    await ensureTopicExists(
      payload.topic
    );
  }

  /**
   * Title Changed
   */
  if (
    payload.title &&
    payload.title !== note.title
  ) {
    updatePayload.slug =
      await generateUniqueNoteSlug({
        repository: noteRepository,
        title: payload.title,
        excludeId: id,
      });
  }

  // /**
  //  * Markdown Changed
  //  */
  // if (
  //   payload.markdown &&
  //   payload.markdown !== note.markdown
  // ) {
  //   Object.assign(
  //     updatePayload,
  //     processMarkdown({
  //       title: payload.title ?? note.title,
  //       markdown: payload.markdown,
  //       type: payload.type ?? note.type,
  //     })
  //   );
  // }

  /**
 * Markdown Changed
 */
  if (
    payload.markdown !== undefined &&
    payload.markdown !== note.markdown
  ) {
    Object.assign(
      updatePayload,
      processMarkdown(payload.markdown)
    );
  }

  
  const updatedNote =
    await noteRepository.updateNote(
      id,
      updatePayload
    );

  return notePresenter(updatedNote);
};

export default updateNoteService;