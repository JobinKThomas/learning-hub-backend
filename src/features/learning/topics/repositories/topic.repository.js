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
/**
 * Find Topics by Module
 */
export const findTopicsByModule = (
  moduleId
) => {
  return Topic.find({
    module: moduleId,
    deletedAt: null,
  })
    .sort({
      order: 1,
      createdAt: 1,
    })
    .lean();
};

/**
 * Count Topics by Module
 */
export const countTopicsByModule = (
  moduleId
) => {
  return Topic.countDocuments({
    module: moduleId,
    deletedAt: null,
  });
};
/**
 * Find Topics by Section
 */
export const findTopicsBySection = (
  sectionId
) => {
  return Topic.find({
    section: sectionId,
    deletedAt: null,
  })
    .sort({
      order: 1,
      createdAt: 1,
    })
    .lean();
};
/**
 * Count Topics by Section
 */
export const countTopicsBySection = (
  sectionId
) => {
  return Topic.countDocuments({
    section: sectionId,
    deletedAt: null,
  });
};

/**
 * Count Topics by Module
 */
export const countTopicsByModule = (
  moduleId
) => {
  return Topic.countDocuments({
    module: moduleId,
    deletedAt: null,
  });
};

/**
 * Count Topics by Learning Path
 */
export const countTopicsByLearningPath = (
  learningPathId
) => {
  return Topic.countDocuments({
    learningPath: learningPathId,
    deletedAt: null,
  });
};

export const countAllTopics = () => {
  return Topic.countDocuments({
    deletedAt: null,
  });
};