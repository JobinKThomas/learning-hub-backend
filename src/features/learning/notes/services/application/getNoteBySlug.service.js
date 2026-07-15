import ApiError from "../../../../../shared/ApiError.js";
import Errors from "../../../../../shared/constants/errors.js";

import notePresenter from "../../presenters/note.presenter.js";

import * as noteRepository from "../../repositories/note.repository.js";

const getNoteBySlugService = async (
  slug
) => {
  const note =
    await noteRepository.findNoteBySlug(slug);

  if (!note) {
    throw new ApiError(
      404,
      Errors.NOTE_NOT_FOUND
    );
  }

  return notePresenter(note);
};

export default getNoteBySlugService;