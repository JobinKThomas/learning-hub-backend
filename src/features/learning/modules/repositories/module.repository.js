import Module from "../models/Module.js";

import {
  DEFAULT_PAGE,
  DEFAULT_LIMIT,
  MAX_LIMIT,
} from "../../../../shared/constants/pagination.js";

import buildContentQuery from "../../../../shared/builders/contentQuery.builder.js";
import buildSort from "../../../../shared/builders/sort.builder.js";

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
export const findModuleBySlug = (
  slug,
  filters = {}
) => {
  return Module.findOne({
    slug,
    deletedAt: null,
    ...filters,
  }).lean();
};

/**
 * Find Modules
 */
// export const findModules = async ({
//   page = DEFAULT_PAGE,
//   limit = DEFAULT_LIMIT,
//   sort = "order",
//   ...filters
// } = {}) => {
//   const safePage = Math.max(1, Number(page));

//   const safeLimit = Math.min(
//     MAX_LIMIT,
//     Math.max(1, Number(limit))
//   );

//   const query = buildContentQuery(filters);

//   const sortOptions =
//     sort === "order"
//       ? { order: 1 }
//       : buildSort(sort);

//   return Module.find(query)
//     .sort(sortOptions)
//     .skip((safePage - 1) * safeLimit)
//     .limit(safeLimit)
//     .lean();
// };
export const findModules = async ({
  query = {},
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  sort = "order",
} = {}) => {
  const safePage = Math.max(1, Number(page));

  const safeLimit = Math.min(
    MAX_LIMIT,
    Math.max(1, Number(limit))
  );

  const sortOptions =
    sort === "order"
      ? { order: 1 }
      : buildSort(sort);

  return Module.find(query)
    .sort(sortOptions)
    .skip((safePage - 1) * safeLimit)
    .limit(safeLimit)
    .lean();
};

/**
 * Count Modules
 */
// export const countModules = (
//   filters = {}
// ) => {
//   const query = buildContentQuery(filters);

//   return Module.countDocuments(query);
// };
export const countModules = ({ query = {} } = {}) => {
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