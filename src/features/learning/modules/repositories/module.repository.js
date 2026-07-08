import Module from "../models/Module.js";

import {
  DEFAULT_PAGE,
  DEFAULT_LIMIT,
  MAX_LIMIT,
} from "../../../../shared/constants/pagination.js";

/**
 * Create Module
 */
export const createModule = (payload) => {
  return Module.create(payload);
};

/**
 * Find Module by ID
 */
export const findModuleById = (id) => {
  return Module.findOne({
    _id: id,
    deletedAt: null,
  });
};

/**
 * Find Module by Slug
 */
export const findModuleBySlug = (slug) => {
  return Module.findOne({
    slug,
    deletedAt: null,
  }).lean();
};

/**
 * Find Modules
 */
export const findModules = async ({
  learningPath,
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

  if (learningPath) {
    query.learningPath = learningPath;
  }

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

  return Module.find(query)
    .sort({ [sortField]: 1 })
    .skip((safePage - 1) * safeLimit)
    .limit(safeLimit)
    .lean();
};

/**
 * Count Modules
 */
export const countModules = (query = {}) => {
  return Module.countDocuments(query);
};

/**
 * Update Module
 */
export const updateModule = (
  id,
  payload
) => {
  return Module.findOneAndUpdate(
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
 * Soft Delete Module
 */
export const softDeleteModule = (
  id,
  userId
) => {
  return Module.findOneAndUpdate(
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

  return Module.exists(query);
};

/**
 * Update Display Order
 */
export const updateOrder = (
  id,
  order
) => {
  return Module.findOneAndUpdate(
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