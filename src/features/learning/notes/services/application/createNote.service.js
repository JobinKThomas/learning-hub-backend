import notePresenter from "../../presenters/note.presenter.js";

import * as noteRepository from "../../repositories/note.repository.js";

import ensureTopicExists from "../../../topics/services/domain/ensureTopicExists.service.js";

import generateUniqueNoteSlug from "../domain/generateUniqueNoteSlug.service.js";

import {
  processMarkdown,
} from "../../../../../shared/content/index.js";

const createNoteService = async (
  payload,
  userId
) => {
  await ensureTopicExists(
    payload.topic
  );

  // const slug =
  //   await generateUniqueNoteSlug({
  //     repository: noteRepository,
  //     title: payload.title,
  //   });

  // const content =
  //   processMarkdown({
  //       title: payload.title,
  //       markdown: payload.markdown,
  //       type: payload.type,
  //   });

  const slug =
    await generateUniqueNoteSlug({
      repository: noteRepository,
      title: payload.title,
    });

  const content =
    processMarkdown(
      payload.markdown
    );

  const note =
    await noteRepository.createNote({
      ...payload,

      ...content,

      slug,

      createdBy: userId,

      updatedBy: userId,
    });

  return notePresenter(note);
};

export default createNoteService;