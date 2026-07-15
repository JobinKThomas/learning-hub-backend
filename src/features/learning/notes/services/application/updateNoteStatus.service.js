import notePresenter from "../../presenters/note.presenter.js";

import * as noteRepository from "../../repositories/note.repository.js";

import ensureNoteExists from "../domain/ensureNoteExists.service.js";

const updateNoteStatusService = async ({
  id,
  status,
  userId,
}) => {
  await ensureNoteExists(id);

  const updatedNote =
    await noteRepository.updateNote(
      id,
      {
        status,
        updatedBy: userId,
      }
    );

  return notePresenter(updatedNote);
};

export default updateNoteStatusService;