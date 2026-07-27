import LearningPath from "../models/LearningPath.js";

import {
  DEFAULT_PAGE,
  DEFAULT_LIMIT,
  MAX_LIMIT,
} from "../../../../shared/constants/pagination.js";

/**
 * Create Learning Path
 */
export const createLearningPath = (payload) => {
  return LearningPath.create(payload);
};

/**
 * Find Learning Path by ID
 * Returns a Mongoose document (used for update operations)
 */
export const findLearningPathById = (id) => {
  return LearningPath.findOne({
    _id: id,
    deletedAt: null,
  });
};

/**
 * Find Learning Path by Slug
 * Returns a plain object (read-only)
 */
export const findLearningPathBySlug = (
  slug,
  filters = {}
) => {
  return LearningPath.findOne({
    slug,
    deletedAt: null,
    ...filters,
  }).lean();
};

/**
 * Find Learning Paths
 */
export const findLearningPaths = async ({
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  search,
  difficulty,
  visibility,
  subscriptionType,
  status,
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

  if (search) {
    query.$text = {
      $search: search,
    };
  }

  if (difficulty) {
    query.difficulty = difficulty;
  }

  if (visibility) {
    query.visibility = visibility;
  }

  if (subscriptionType) {
    query.subscriptionType = subscriptionType;
  }

  if (status) {
    query.status = status;
  }

  const allowedSortFields = [
    "order",
    "title",
    "createdAt",
    "updatedAt",
  ];

  const sortField = allowedSortFields.includes(sort)
    ? sort
    : "order";

  return LearningPath.find(query)
    .sort({ [sortField]: 1 })
    .skip((safePage - 1) * safeLimit)
    .limit(safeLimit)
    .lean();
};

/**
 * Count Learning Paths
 */
export const countLearningPaths = ({
  search,
  difficulty,
  visibility,
  subscriptionType,
  status,
} = {}) => {
  const query = {
    deletedAt: null,
  };

  if (search) {
    query.$text = {
      $search: search,
    };
  }

  if (difficulty) {
    query.difficulty = difficulty;
  }

  if (visibility) {
    query.visibility = visibility;
  }

  if (subscriptionType) {
    query.subscriptionType =
      subscriptionType;
  }

  if (status) {
    query.status = status;
  }

  return LearningPath.countDocuments(query);
};

/**
 * Update Learning Path
 */
export const updateLearningPath = (
  id,
  payload
) => {
  return LearningPath.findOneAndUpdate(
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
 * Soft Delete Learning Path
 */
export const softDeleteLearningPath = (
  id,
  userId
) => {
  return LearningPath.findOneAndUpdate(
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
 * Check if Slug Exists
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

  return LearningPath.exists(query);
};

/**
 * Update Display Order
 */
export const updateOrder = (
  id,
  order
) => {
  return LearningPath.findOneAndUpdate(
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