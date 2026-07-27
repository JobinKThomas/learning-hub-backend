import QuizAttempt from "../models/quizAttempt.model.js";

import {
  DEFAULT_PAGE,
  DEFAULT_LIMIT,
  MAX_LIMIT,
} from "../../../../shared/constants/pagination.js";

/**
 * Create Quiz Attempt
 */
export const createQuizAttempt = (payload) => {
  return QuizAttempt.create(payload);
};

/**
 * Find Quiz Attempt by ID
 */
export const findQuizAttemptById = (id) => {
  return QuizAttempt.findById(id)
    .populate("quiz", "title slug")
    .populate("user", "firstName lastName email");
};

/**
 * Find Latest Quiz Attempt
 */
export const findLatestQuizAttempt = ({
  user,
  quiz,
}) => {
  return QuizAttempt.findOne({
    user,
    quiz,
  })
    .sort({
      createdAt: -1,
    })
    .lean();
};

/**
 * Find Quiz Attempts
 */
export const findQuizAttempts = ({
  user,
  quiz,
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
} = {}) => {
  const safePage = Math.max(
    DEFAULT_PAGE,
    Number(page)
  );

  const safeLimit = Math.min(
    MAX_LIMIT,
    Math.max(1, Number(limit))
  );

  const query = {};

  if (user) {
    query.user = user;
  }

  if (quiz) {
    query.quiz = quiz;
  }

  return QuizAttempt.find(query)
    .sort({
      createdAt: -1,
    })
    .skip((safePage - 1) * safeLimit)
    .limit(safeLimit)
    .populate("quiz", "title slug")
    .lean();
};

/**
 * Count Quiz Attempts
 */
export const countQuizAttempts = (
  filters = {}
) => {
  return QuizAttempt.countDocuments(filters);
};

/**
 * Delete Quiz Attempt
 */
export const deleteQuizAttempt = (
  id
) => {
  return QuizAttempt.findByIdAndDelete(id);
};