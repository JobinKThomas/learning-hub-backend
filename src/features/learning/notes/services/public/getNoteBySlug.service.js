import ApiError from "../../../../../shared/ApiError.js";

import ContentStatus from "../../../../../shared/enums/contentStatus.enum.js";
import Visibility from "../../../../../shared/enums/visibility.enum.js";

import { Messages } from "../../../../../shared/constants/messages.js";

import noteDetailPresenter from "../../presenters/public/noteDetail.presenter.js";

import * as noteRepository from "../../repositories/note.repository.js";

const getNoteBySlugService = async (slug) => {
  const note = await noteRepository.findNoteBySlug(
    slug,
    {
      status: ContentStatus.PUBLISHED,
      visibility: Visibility.PUBLIC,
    }
  );

  if (!note) {
    throw new ApiError(
      404,
      Messages.NOTE_NOT_FOUND
    );
  }

  return noteDetailPresenter(note);
};

export default getNoteBySlugService;