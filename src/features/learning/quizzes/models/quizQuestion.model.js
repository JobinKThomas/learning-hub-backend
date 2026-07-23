import mongoose from "mongoose";

const optionSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
    },

    label: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    _id: false,
  }
);

const questionSchema = new mongoose.Schema(
  {
    quiz: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
      required: true,
      index: true,
    },

    question: {
      type: String,
      required: true,
      trim: true,
    },

    explanation: {
      type: String,
      default: "",
    },

    type: {
      type: String,
      enum: ["MCQ"],
      default: "MCQ",
    },

    options: {
      type: [optionSchema],
      validate: {
        validator(options) {
          return (
            Array.isArray(options) &&
            options.length >= 2 &&
            options.length <= 6
          );
        },
        message:
          "Question must contain between 2 and 6 options.",
      },
    },

    correctOption: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
    },

    points: {
      type: Number,
      default: 1,
      min: 1,
    },

    order: {
      type: Number,
      default: 0,
      min: 0,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

questionSchema.index({
  quiz: 1,
  order: 1,
});

questionSchema.index({
  quiz: 1,
  deletedAt: 1,
});

const Question = mongoose.model(
  "Question",
  questionSchema
);

export default Question;