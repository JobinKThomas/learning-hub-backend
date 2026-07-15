import ApiError from "../../../../../shared/ApiError.js";
import Errors from "../../../../../shared/constants/errors.js";

import * as noteRepository from "../../repositories/note.repository.js";

const ensureNoteExists = async (
  noteId
) => {
  const note =
    await noteRepository.findNoteById(
      noteId
    );

  if (!note) {
    throw new ApiError(
      404,
      Errors.NOTE_NOT_FOUND
    );
  }

  return note;
};

export default ensureNoteExists;