import Playground from "../models/playground.model.js";

import buildContentQuery from "../../../../shared/builders/contentQuery.builder.js";
import buildSort from "../../../../shared/builders/sort.builder.js";

/**
 * Create Playground
 */
export const createPlayground = (payload) => {
  return Playground.create(payload);
};

/**
 * Find Playground by ID
 */
export const findPlaygroundById = (id) => {
  return Playground.findOne({
    _id: id,
    deletedAt: null,
  });
};

/**
 * Find Playground by Slug
 */
export const findPlaygroundBySlug = (slug) => {
  return Playground.findOne({
    slug,
    deletedAt: null,
  });
};

/**
 * Find Playgrounds
 */
export const findPlaygrounds = (filters = {}) => {
  const {
    page = 1,
    limit = 20,
    sort = "-createdAt",
  } = filters;

  return Playground.find(
    buildContentQuery(filters)
  )
    .sort(buildSort(sort))
    .skip((page - 1) * Number(limit))
    .limit(Number(limit));
};

/**
 * Count Playgrounds
 */
export const countPlaygrounds = (
  filters = {}
) => {
  return Playground.countDocuments(
    buildContentQuery(filters)
  );
};

/**
 * Update Playground
 */
export const updatePlayground = (
  id,
  payload
) => {
  return Playground.findByIdAndUpdate(
    id,
    payload,
    {
      new: true,
      runValidators: true,
    }
  );
};