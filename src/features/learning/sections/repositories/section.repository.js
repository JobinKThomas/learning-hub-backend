import Section from "../models/Section.js";

import {
  DEFAULT_PAGE,
  DEFAULT_LIMIT,
  MAX_LIMIT,
} from "../../../../shared/constants/pagination.js";

/**
 * Create Section
 */
export const createSection = (payload) => {
  return Section.create(payload);
};

/**
 * Find Section by ID
 */
export const findSectionById = (id) => {
  return Section.findOne({
    _id: id,
    deletedAt: null,
  });
};

/**
 * Find Section by Slug
 */
export const findSectionBySlug = (slug) => {
  return Section.findOne({
    slug,
    deletedAt: null,
  });
};

/**
 * Find Sections
 */
export const findSections = ({
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  search,
  learningPath,
  module,
  parentSection,
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

  if (search) {
    query.$text = {
      $search: search,
    };
  }

  if (learningPath) {
    query.learningPath = learningPath;
  }

  if (module) {
    query.module = module;
  }

  if (parentSection !== undefined) {
    query.parentSection = parentSection;
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
    "createdAt",
    "updatedAt",
  ];

  const sortField =
    allowedSortFields.includes(sort)
      ? sort
      : "order";

  return Section.find(query)
    .sort({
      [sortField]: 1,
    })
    .skip((safePage - 1) * safeLimit)
    .limit(safeLimit)
    .lean();
};

/**
 * Count Sections
 */
export const countSections = (
  query = {}
) => {
  return Section.countDocuments({
    ...query,
    deletedAt: null,
  });
};

/**
 * Update Section
 */
export const updateSection = (
  id,
  payload
) => {
  return Section.findOneAndUpdate(
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
 * Soft Delete Section
 */
export const softDeleteSection = (
  id,
  userId
) => {
  return Section.findOneAndUpdate(
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

  return Section.exists(query);
};

/**
 * Find Root Sections
 */
export const findRootSections = (
  moduleId
) => {
  return Section.find({
    module: moduleId,
    parentSection: null,
    deletedAt: null,
  }).sort({
    order: 1,
    title: 1,
  });
};

/**
 * Find Child Sections
 */
export const findChildSectionsByParent = (
  parentSectionId
) => {
  return Section.find({
    parentSection: parentSectionId,
    deletedAt: null,
  }).sort({
    order: 1,
    title: 1,
  });
};

/**
 * Check Child Sections Exist
 */
export const hasChildSections = (
  sectionId
) => {
  return Section.exists({
    parentSection: sectionId,
    deletedAt: null,
  });
};

/**
 * Increment Children Count
 */
export const incrementChildrenCount = (
  sectionId
) => {
  return Section.findOneAndUpdate(
    {
      _id: sectionId,
      deletedAt: null,
    },
    {
      $inc: {
        childrenCount: 1,
      },
    },
    {
      new: true,
    }
  );
};

/**
 * Decrement Children Count
 */
export const decrementChildrenCount = (
  sectionId
) => {
  return Section.findOneAndUpdate(
    {
      _id: sectionId,
      deletedAt: null,
    },
    {
      $inc: {
        childrenCount: -1,
      },
    },
    {
      new: true,
    }
  );
};

/**
 * Find Sections by Module
 */
export const findSectionsByModule = (
  moduleId
) => {
  return Section.find({
    module: moduleId,
    deletedAt: null,
  })
    .sort({
      order: 1,
      title: 1,
    })
    .lean();
};