import InterviewQuestion from "../models/interviewQuestion.model.js";

import buildContentQuery from "../../../../shared/builders/contentQuery.builder.js";
import buildSort from "../../../../shared/builders/sort.builder.js";

/**
 * Create Interview Question
 */
export const createInterviewQuestion = (payload) => {
  return InterviewQuestion.create(payload);
};

/**
 * Find Interview Question by ID
 */
export const findInterviewQuestionById = (id) => {
  return InterviewQuestion.findOne({
    _id: id,
    deletedAt: null,
  });
};

/**
 * Find Interview Questions
 */
export const findInterviewQuestions = (filters = {}) => {
  const {
    page = 1,
    limit = 20,
    sort = "-createdAt",
  } = filters;

  return InterviewQuestion.find(
    buildContentQuery(filters)
  )
    .sort(buildSort(sort))
    .skip((page - 1) * Number(limit))
    .limit(Number(limit));
};

/**
 * Count Interview Questions
 */
export const countInterviewQuestions = (
  filters = {}
) => {
  return InterviewQuestion.countDocuments(
    buildContentQuery(filters)
  );
};

/**
 * Update Interview Question
 */
export const updateInterviewQuestion = (
  id,
  payload
) => {
  return InterviewQuestion.findByIdAndUpdate(
    id,
    payload,
    {
      new: true,
      runValidators: true,
    }
  );
};

/**
 * Find Interview Questions by Topic
 */
export const findInterviewQuestionsByTopic = (
  topicId
) => {
  return InterviewQuestion.find({
    topic: topicId,
    deletedAt: null,
  })
    .sort({
      order: 1,
    });
};