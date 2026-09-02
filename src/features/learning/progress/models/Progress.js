import mongoose from "mongoose";

const progressSchema = new mongoose.Schema(
  {
    /**
     * User
     */
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    /**
     * Learning hierarchy
     */
    learningPath: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LearningPath",
      required: true,
      index: true,
    },

    module: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Module",
      required: true,
      index: true,
    },

    section: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
      required: true,
      index: true,
    },

    topic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
      required: true,
      index: true,
    },

    /**
     * Content completion
     */
    noteCompleted: {
      type: Boolean,
      default: false,
    },

    resourceCompleted: {
      type: Boolean,
      default: false,
    },

    playgroundCompleted: {
      type: Boolean,
      default: false,
    },

    quizCompleted: {
      type: Boolean,
      default: false,
    },

    /**
     * Overall topic progress
     *
     * 0   = Nothing completed
     * 25  = One content type completed
     * 50  = Two completed
     * 75  = Three completed
     * 100 = Everything completed
     */
    progress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },

    /**
     * Last activity
     */
    lastVisitedAt: {
      type: Date,
      default: null,
    },

    /**
     * Topic completion
     */
    completedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * One progress record per user per topic.
 */
progressSchema.index(
  {
    user: 1,
    topic: 1,
  },
  {
    unique: true,
  }
);

/**
 * Useful for learning-path progress queries.
 */
progressSchema.index({
  user: 1,
  learningPath: 1,
});

/**
 * Useful for module progress queries.
 */
progressSchema.index({
  user: 1,
  module: 1,
});

/**
 * Useful for section progress queries.
 */
progressSchema.index({
  user: 1,
  section: 1,
});

export default mongoose.model(
  "Progress",
  progressSchema
);