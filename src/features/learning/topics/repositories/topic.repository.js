import Topic from "../models/Topics.js";

import {
  DEFAULT_PAGE,
  DEFAULT_LIMIT,
  MAX_LIMIT,
} from "../../../../shared/constants/pagination.js";

/**
 * Create Topic
 */
export const createTopic = (payload) => {
  return Topic.create(payload);
};

/**
 * Find Topic by ID
 */
export const findTopicById = (id) => {
  return Topic.findOne({
    _id: id,
    deletedAt: null,
  });
};

/**
 * Find Topic by Slug
 */
export const findTopicBySlug = (slug) => {
  return Topic.findOne({
    slug,
    deletedAt: null,
  }).lean();
};

/**
 * Find Topics
 */
export const findTopics = async ({
  query = {},
  sort = { order: 1 },
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
} = {}) => {
  const safePage = Math.max(
    1,
    Number(page)
  );

  const safeLimit = Math.min(
    MAX_LIMIT,
    Math.max(1, Number(limit))
  );

  return Topic.find(query)
    .sort(sort)
    .skip((safePage - 1) * safeLimit)
    .limit(safeLimit)
    .lean();
};

/**
 * Count Topics
 */
export const countTopics = (
  query = {}
) => {
  return Topic.countDocuments(query);
};

/**
 * Update Topic
 */
export const updateTopic = (
  id,
  payload
) => {
  return Topic.findOneAndUpdate(
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
 * Soft Delete Topic
 */
export const softDeleteTopic = (
  id,
  userId
) => {
  return Topic.findOneAndUpdate(
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

  return Topic.exists(query);
};

/**
 * Update Display Order
 */
export const updateOrder = (
  id,
  order
) => {
  return Topic.findOneAndUpdate(
    {
      _id: id,
      deletedAt: null,
    },
    {
      order,
    },
    {
      new: true,
    }
  );
};