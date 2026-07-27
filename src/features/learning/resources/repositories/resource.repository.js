import Resource from "../models/resource.model.js";

import buildContentQuery from "../../../../shared/builders/contentQuery.builder.js";
import buildSort from "../../../../shared/builders/sort.builder.js";

/**
 * Create Resource
 */
export const createResource = (payload) => {
  return Resource.create(payload);
};

/**
 * Find Resource by ID
 */
export const findResourceById = (id) => {
  return Resource.findOne({
    _id: id,
    deletedAt: null,
  });
};

/**
 * Find Resource by Slug
 */
export const findResourceBySlug = (
  slug,
  filters = {}
) => {
  return Resource.findOne({
    slug,
    deletedAt: null,
    ...filters,
  }).lean();
};

/**
 * Find Resources
 */
export const findResources = (filters = {}) => {
  const {
    page = 1,
    limit = 20,
    sort = "-createdAt",
  } = filters;

  return Resource.find(
    buildContentQuery(filters)
  )
    .sort(buildSort(sort))
    .skip((page - 1) * limit)
    .limit(Number(limit));
};

/**
 * Count Resources
 */
export const countResources = (filters = {}) => {
  return Resource.countDocuments(
    buildContentQuery(filters)
  );
};

/**
 * Update Resource
 */
export const updateResource = (
  id,
  payload
) => {
  return Resource.findByIdAndUpdate(
    id,
    payload,
    {
      new: true,
      runValidators: true,
    }
  );
};