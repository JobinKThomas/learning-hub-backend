import Quiz from "../models/quiz.model.js";

import buildContentQuery from "../../../../shared/builders/contentQuery.builder.js";
import buildSort from "../../../../shared/builders/sort.builder.js";
import ContentStatus from "../../../../shared/enums/contentStatus.enum.js";

/**
 * Create Quiz
 */
export const createQuiz = (payload) => {
  return Quiz.create(payload);
};

/**
 * Find Quiz by ID
 */
export const findQuizById = (id) => {
  return Quiz.findOne({
    _id: id,
    deletedAt: null,
  });
};

/**
 * Find Quiz by Slug
 */
export const findQuizBySlug = (
  slug,
  filters = {}
) => {
  return Quiz.findOne({
    slug,
    deletedAt: null,
    ...filters,
  }).lean();
};
export const findBySlug = findQuizBySlug;
/**
 * Find Quizzes
 */
export const findQuizzes = (filters = {}) => {
  const {
    page = 1,
    limit = 20,
    sort = "-createdAt",
  } = filters;

  return Quiz.find(buildContentQuery(filters))
    .sort(buildSort(sort))
    .skip((page - 1) * Number(limit))
    .limit(Number(limit));
};

/**
 * Count Quizzes
 */
export const countQuizzes = (filters = {}) => {
  return Quiz.countDocuments(
    buildContentQuery(filters)
  );
};

/**
 * Update Quiz
 */
export const updateQuiz = (
  id,
  payload
) => {
  return Quiz.findByIdAndUpdate(
    id,
    payload,
    {
      new: true,
      runValidators: true,
    }
  );
};

/**
 * Find Quizzes by Topic
 */
export const findQuizzesByTopic = (
  topicId
) => {
  return Quiz.find({
    topic: topicId,
    deletedAt: null,
    status: ContentStatus.PUBLISHED,
  }).sort({
    order: 1,
  });
};

/**
 * Find One Published Quiz by Topic
 */
export const findOneByTopic = (topicId) => {
  return Quiz.findOne({
    topic: topicId,
    deletedAt: null,
    status: ContentStatus.PUBLISHED,
  }).lean();
};