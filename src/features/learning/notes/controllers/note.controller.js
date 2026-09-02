import asyncHandler from "../../../../middleware/asyncHandler.middleware.js";

import ApiResponse from "../../../../shared/ApiResponse.js";
import {Messages} from "../../../../shared/constants/messages.js";

import createNoteService from "../services/application/createNote.service.js";
import listNotesService from "../services/application/listNotes.service.js";
import getNoteBySlugService from "../services/application/getNoteBySlug.service.js";
import updateNoteService from "../services/application/updateNote.service.js";
import updateNoteStatusService from "../services/application/updateNoteStatus.service.js";
import deleteNoteService from "../services/application/deleteNote.service.js";

import completeNoteService from "../services/application/completeNote.service.js";

import progressPresenter from "../../../progress/presenters/progress.presenter.js";

/**
 * Create Note
 */
export const createNote = asyncHandler(
  async (req, res) => {
    const note = await createNoteService(
      req.body,
      req.user.id
    );

    return res.status(201).json(
      new ApiResponse({
        message: Messages.NOTE_CREATED,
        data: note,
      })
    );
  }
);

/**
 * List Notes
 */
export const listNotes = asyncHandler(
  async (req, res) => {
    const result =
      await listNotesService(req.query);

    return res.status(200).json(
      new ApiResponse({
        message: Messages.SUCCESS,
        data: result,
      })
    );
  }
);

/**
 * Get Note by Slug
 */
// export const getNoteBySlug =
//   asyncHandler(async (req, res) => {
//     const note =
//       await getNoteBySlugService(
//         req.params.slug
//       );

//     return successResponse(
//       res,
//       Messages.NOTE_CREATED,
//       note,
//       201
//     );
//   });
export const getNoteBySlug = asyncHandler(
  async (req, res) => {
    const note = await getNoteBySlugService(
      req.params.slug
    );

    return res.status(200).json(
      new ApiResponse({
        message: Messages.SUCCESS,
        data: note,
      })
    );
  }
);

/**
 * Update Note
 */
export const updateNote = asyncHandler(
  async (req, res) => {
    const note =
      await updateNoteService({
        id: req.params.id,
        payload: req.body,
        userId: req.user.id,
      });

    return res.status(200).json(
      new ApiResponse({
        message: Messages.NOTE_UPDATED,
        data: note,
      })
    );
  }
);

/**
 * Update Note Status
 */
export const updateNoteStatus =
  asyncHandler(async (req, res) => {
    const note =
      await updateNoteStatusService({
        id: req.params.id,
        status: req.body.status,
        userId: req.user.id,
      });

    return res.status(200).json(
      new ApiResponse({
        message:
          Messages.NOTE_STATUS_UPDATED,
        data: note,
      })
    );
  });

/**
 * Delete Note
 */
export const deleteNote = asyncHandler(
  async (req, res) => {
    await deleteNoteService({
      id: req.params.id,
      userId: req.user.id,
    });

    return res.status(200).json(
      new ApiResponse({
        message: Messages.NOTE_DELETED,
      })
    );
  }
);

/**
 * Complete Note
 */
export const completeNote = asyncHandler(
  async (req, res) => {
    const progress =
      await completeNoteService({
        noteId: req.params.id,
        userId: req.user.id,
      });

    return res.status(200).json(
      new ApiResponse({
        message: Messages.SUCCESS,
        data: progressPresenter(progress),
      })
    );
  }
);