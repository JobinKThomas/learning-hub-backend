import mongoose from "mongoose";

import Visibility from "../enums/visibility.enum.js";
import SubscriptionType from "../enums/subscription.enum.js";
import ContentStatus from "../enums/contentStatus.enum.js";

const baseContentSchema = {
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 100,
  },

  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  shortDescription: {
    type: String,
    default: "",
    maxlength: 250,
  },

  description: {
    type: String,
    default: "",
  },

  thumbnail: {
    type: String,
    default: null,
  },

  icon: {
    type: String,
    default: null,
  },

  visibility: {
    type: String,
    enum: Object.values(Visibility),
    default: Visibility.PUBLIC,
  },

  subscriptionType: {
    type: String,
    enum: Object.values(SubscriptionType),
    default: SubscriptionType.FREE,
  },

  status: {
    type: String,
    enum: Object.values(ContentStatus),
    default: ContentStatus.DRAFT,
  },

  order: {
    type: Number,
    default: 0,
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },

  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },

  deletedAt: {
    type: Date,
    default: null,
    select: false,
  },

  deletedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
    select: false,
  },
};

export default baseContentSchema;