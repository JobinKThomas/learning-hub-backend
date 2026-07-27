import mongoose from "mongoose";

const answerSchema = new mongoose.Schema(
  {
    question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
      required: true,
    },

    selectedOption: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
    },

    correctOption: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
    },

    isCorrect: {
      type: Boolean,
      required: true,
    },

    pointsEarned: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    _id: false,
  }
);

const quizAttemptSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
      index: true,
    },

    quiz: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
      required: true,
      index: true,
    },

    answers: {
      type: [answerSchema],
      default: [],
    },

    score: {
      type: Number,
      default: 0,
      min: 0,
    },

    totalPoints: {
      type: Number,
      default: 0,
      min: 0,
    },

    percentage: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },

    passed: {
      type: Boolean,
      default: false,
    },

    startedAt: {
      type: Date,
      default: Date.now,
    },

    submittedAt: {
      type: Date,
      default: Date.now,
    },

    timeTaken: {
      type: Number,
      default: 0,
      min: 0,
    },

    ipAddress: {
      type: String,
      default: "",
    },

    userAgent: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

quizAttemptSchema.index({
  user: 1,
  quiz: 1,
  createdAt: -1,
});

quizAttemptSchema.index({
  quiz: 1,
  createdAt: -1,
});

export default mongoose.model(
  "QuizAttempt",
  quizAttemptSchema
);