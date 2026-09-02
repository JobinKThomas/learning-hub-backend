import Progress from "../models/Progress.js";

/**
 * Create Progress
 */
export const createProgress = (payload) => {
  return Progress.create(payload);
};

/**
 * Find Progress by ID
 */
export const findProgressById = (id) => {
  return Progress.findById(id).lean();
};

/**
 * Find Progress for a User + Topic
 */
export const findProgressByUserAndTopic = (
  userId,
  topicId
) => {
  return Progress.findOne({
    user: userId,
    topic: topicId,
  }).lean();
};

/**
 * Find or Create Progress
 *
 * Used when a user completes their first
 * piece of content in a topic.
 */
export const findOrCreateProgress = async ({
  userId,
  learningPathId,
  moduleId,
  sectionId,
  topicId,
}) => {
  return Progress.findOneAndUpdate(
    {
      user: userId,
      topic: topicId,
    },
    {
      $setOnInsert: {
        user: userId,
        learningPath: learningPathId,
        module: moduleId,
        section: sectionId,
        topic: topicId,
      },
    },
    {
      new: true,
      upsert: true,
      setDefaultsOnInsert: true,
    }
  );
};

/**
 * Update Progress
 */
export const updateProgress = (
  userId,
  topicId,
  payload
) => {
  return Progress.findOneAndUpdate(
    {
      user: userId,
      topic: topicId,
    },
    payload,
    {
      new: true,
      runValidators: true,
    }
  ).lean();
};

/**
 * Delete Progress
 */
export const deleteProgress = (
  userId,
  topicId
) => {
  return Progress.findOneAndDelete({
    user: userId,
    topic: topicId,
  });
};

/**
 * Find all progress records for a Learning Path
 */
export const findProgressByLearningPath = (
  userId,
  learningPathId
) => {
  return Progress.find({
    user: userId,
    learningPath: learningPathId,
  })
    .sort({
      createdAt: 1,
    })
    .lean();
};

/**
 * Find all progress records for a Module
 */
export const findProgressByModule = (
  userId,
  moduleId
) => {
  return Progress.find({
    user: userId,
    module: moduleId,
  })
    .sort({
      createdAt: 1,
    })
    .lean();
};

/**
 * Find all progress records for a Section
 */
export const findProgressBySection = (
  userId,
  sectionId
) => {
  return Progress.find({
    user: userId,
    section: sectionId,
  })
    .sort({
      createdAt: 1,
    })
    .lean();
};

/**
 * Find user's latest progress
 */
export const findLatestProgress = (
  userId,
  limit = 5
) => {
  return Progress.find({
    user: userId,
  })
    .sort({
      lastVisitedAt: -1,
    })
    .limit(limit)
    .lean();
};

/**
 * Find latest incomplete progress
 */
export const findLatestIncompleteProgress = (
  userId
) => {
  return Progress.findOne({
    user: userId,
    progress: {
      $gt: 0,
      $lt: 100,
    },
  })
    .sort({
      lastVisitedAt: -1,
    })
    .lean();
};

/**
 * Find all progress records for a Section Tree
 */
export const findProgressBySectionTree = async (
  userId,
  sectionIds
) => {
  return Progress.find({
    user: userId,
    section: {
      $in: sectionIds,
    },
  }).lean();
};

/**
 * Find all progress records for a user
 */
export const findAllProgressByUser = (
  userId
) => {
  return Progress.find({
    user: userId,
  })
    .sort({
      lastVisitedAt: -1,
    })
    .lean();
};