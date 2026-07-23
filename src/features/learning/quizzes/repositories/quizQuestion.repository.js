import Question from "../models/quizQuestion.model.js";

import buildSort from "../../../../shared/builders/sort.builder.js";

/**
 * Create Question
 */
export const createQuestion = (payload) => {
  return Question.create(payload);
};

/**
 * Find Question by ID
 */
export const findQuestionById = (id) => {
  return Question.findOne({
    _id: id,
    deletedAt: null,
  });
};

/**
 * Find Questions
 */
export const findQuestions = (filters = {}) => {
  const {
    quiz,
    page = 1,
    limit = 20,
    sort = "order",
  } = filters;

  const query = {
    deletedAt: null,
  };

  if (quiz) {
    query.quiz = quiz;
  }

  return Question.find(query)
    .sort(buildSort(sort))
    .skip((page - 1) * Number(limit))
    .limit(Number(limit));
};

/**
 * Count Questions
 */
export const countQuestions = (filters = {}) => {
  const query = {
    deletedAt: null,
  };

  if (filters.quiz) {
    query.quiz = filters.quiz;
  }

  return Question.countDocuments(query);
};

/**
 * Find Questions by Quiz
 */
export const findQuestionsByQuiz = (quizId) => {
  return Question.find({
    quiz: quizId,
    deletedAt: null,
  }).sort({
    order: 1,
  });
};

/**
 * Update Question
 */
export const updateQuestion = (
  id,
  payload
) => {
  return Question.findByIdAndUpdate(
    id,
    payload,
    {
      new: true,
      runValidators: true,
    }
  );
};