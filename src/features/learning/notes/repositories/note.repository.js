import Note from "../models/Note.js";

import {
  DEFAULT_PAGE,
  DEFAULT_LIMIT,
  MAX_LIMIT,
} from "../../../../shared/constants/pagination.js";

/**
 * Create Note
 */
export const createNote = (payload) => {
  return Note.create(payload);
};

/**
 * Find Note by ID
 */
export const findNoteById = (id) => {
  return Note.findOne({
    _id: id,
    deletedAt: null,
  });
};

/**
 * Find Note by Slug
 */
export const findNoteBySlug = (
  slug,
  filters = {}
) => {
  return Note.findOne({
    slug,
    deletedAt: null,
    ...filters,
  }).lean();
};

export const findBySlug = findNoteBySlug;

/**
 * Find Notes
 */
export const findNotes = ({
  topic,
  type,
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  search,
  status,
  visibility,
  sort = "order",
} = {}) => {
  const safePage = Math.max(1, Number(page));

  const safeLimit = Math.min(
    MAX_LIMIT,
    Math.max(1, Number(limit))
  );

  const query = {
    deletedAt: null,
  };

  if (topic) {
    query.topic = topic;
  }

  if (type) {
    query.type = type;
  }

  if (search) {
    query.$text = {
      $search: search,
    };
  }

  if (status) {
    query.status = status;
  }

  if (visibility) {
    query.visibility = visibility;
  }

  const allowedSortFields = [
    "order",
    "title",
    "readingTime",
    "wordCount",
    "createdAt",
    "updatedAt",
  ];

  const sortField =
    allowedSortFields.includes(sort)
      ? sort
      : "order";

  return Note.find(query)
    .sort({
      [sortField]: 1,
    })
    .skip((safePage - 1) * safeLimit)
    .limit(safeLimit)
    .lean();
};

/**
 * Count Notes
 */
export const countNotes = (
  query = {}
) => {
  return Note.countDocuments({
    ...query,
    deletedAt: null,
  });
};

/**
 * Update Note
 */
export const updateNote = (
  id,
  payload
) => {
  return Note.findOneAndUpdate(
    {
      _id: id,
      deletedAt: null,
    },
    payload,
    {
      new: true,
      runValidators: true,
    }
  );
};

/**
 * Soft Delete Note
 */
export const softDeleteNote = (
  id,
  userId
) => {
  return Note.findOneAndUpdate(
    {
      _id: id,
      deletedAt: null,
    },
    {
      deletedAt: new Date(),
      deletedBy: userId,
    },
    {
      new: true,
    }
  );
};

/**
 * Check Slug Exists
 */
export const existsBySlug = (
  slug,
  excludeId = null
) => {
  const query = {
    slug,
    deletedAt: null,
  };

  if (excludeId) {
    query._id = {
      $ne: excludeId,
    };
  }

  return Note.exists(query);
};

/**
 * Find One Note by Topic
 */
export const findOneByTopic = (
  topicId
) => {
  return Note.findOne({
    topic: topicId,
    deletedAt: null,
  }).lean();
};