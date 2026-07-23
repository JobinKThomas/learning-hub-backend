import mongoose from "mongoose";

import ContentStatus from "../../../../shared/enums/contentStatus.enum.js";
import Difficulty from "../../../../shared/enums/difficulty.enum.js";
import Visibility from "../../../../shared/enums/visibility.enum.js";
import SubscriptionType from "../../../../shared/enums/subscription.enum.js";
import ProgrammingLanguage from "../../../../shared/enums/programmingLanguage.enum.js";

const playgroundSchema = new mongoose.Schema(
  {
    topic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
      required: true,
      index: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      index: true,
    },

    shortDescription: {
      type: String,
      trim: true,
      maxlength: 250,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },

    language: {
      type: String,
      enum: Object.values(
        ProgrammingLanguage
      ),
      required: true,
      default:
        ProgrammingLanguage.JAVASCRIPT,
    },

    starterCode: {
      type: String,
      required: true,
      default: "",
    },

    solutionCode: {
      type: String,
      default: "",
    },

    explanation: {
      type: String,
      default: "",
    },

    difficulty: {
      type: String,
      enum: Object.values(Difficulty),
      default: Difficulty.BEGINNER,
    },

    visibility: {
      type: String,
      enum: Object.values(Visibility),
      default: Visibility.PUBLIC,
    },

    subscriptionType: {
      type: String,
      enum: Object.values(
        SubscriptionType
      ),
      default:
        SubscriptionType.FREE,
    },

    order: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: Object.values(
        ContentStatus
      ),
      default: ContentStatus.DRAFT,
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

    estimatedMinutes: {
      type: Number,
      default: 15,
      min: 1,
    },
  },
  {
    timestamps: true,
  }
);

playgroundSchema.index({
  topic: 1,
  order: 1,
});

playgroundSchema.index({
  topic: 1,
  status: 1,
});

playgroundSchema.index({
  slug: 1,
});

const Playground = mongoose.model(
  "Playground",
  playgroundSchema
);

export default Playground;