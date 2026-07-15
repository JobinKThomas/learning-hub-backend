import * as noteRepository from "../../repositories/note.repository.js";

import ensureNoteExists from "../domain/ensureNoteExists.service.js";

const deleteNoteService = async ({
  id,
  userId,
}) => {
  await ensureNoteExists(id);

  await noteRepository.softDeleteNote(
    id,
    userId
  );
};

export default deleteNoteService;