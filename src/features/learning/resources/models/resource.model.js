import mongoose from "mongoose";

import ContentStatus from "../../../../shared/enums/contentStatus.enum.js";
import Difficulty from "../../../../shared/enums/difficulty.enum.js";
import Visibility from "../../../../shared/enums/visibility.enum.js";
import SubscriptionType from "../../../../shared/enums/subscription.enum.js";
import ResourceType from "../../../../shared/enums/resourceType.enum.js";

const resourceSchema = new mongoose.Schema(
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
      lowercase: true,
      trim: true,
      index: true,
    },

    type: {
      type: String,
      enum: Object.values(ResourceType),
      required: true,
      default: ResourceType.DOCUMENTATION,
    },

    url: {
      type: String,
      required: true,
      trim: true,
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
      enum: Object.values(ContentStatus),
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
  },
  {
    timestamps: true,
  }
);

resourceSchema.index({
  topic: 1,
  order: 1,
});

resourceSchema.index({
  topic: 1,
  status: 1,
});

resourceSchema.index({
  slug: 1,
});

const Resource = mongoose.model(
  "Resource",
  resourceSchema
);

export default Resource;