import * as noteRepository from "../../repositories/note.repository.js";

import notePresenter from "../../presenters/note.presenter.js";

import buildPaginationMeta from "../../../../../shared/builders/pagination.builder.js";

const listNotesService = async (
  filters = {}
) => {
  const notes =
    await noteRepository.findNotes(filters);

  const total =
    await noteRepository.countNotes({
      topic: filters.topic,
      type: filters.type,
      status: filters.status,
      visibility: filters.visibility,
    });

  return {
    items: notes.map(notePresenter),

    meta: buildPaginationMeta({
      page: Number(filters.page ?? 1),
      limit: Number(filters.limit ?? 20),
      total,
    }),
  };
};

export default listNotesService;