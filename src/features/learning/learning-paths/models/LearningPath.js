import mongoose from "mongoose";

import Difficulty from "../../shared/enums/difficulty.enum.js";
import Visibility from "../../shared/enums/visibility.enum.js";
import SubscriptionType from "../../shared/enums/subscription.enum.js";
import ContentStatus from "../../shared/enums/contentStatus.enum.js";
import createSlug from "../../shared/slug/slugify.js";

const learningPathSchema = new mongoose.Schema(
  {
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
      trim: true,
      maxlength: 250,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },

    thumbnail: {
      type: String,
      default: null,
    },

    banner: {
      type: String,
      default: null,
    },

    icon: {
      type: String,
      default: null,
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
      enum: Object.values(SubscriptionType),
      default: SubscriptionType.FREE,
    },

    estimatedHours: {
      type: Number,
      default: 0,
      min: 0,
    },

    estimatedModules: {
      type: Number,
      default: 0,
      min: 0,
    },

    estimatedNotes: {
      type: Number,
      default: 0,
      min: 0,
    },

    tags: [
        {
            type: String,
            trim: true,
            lowercase: true,
        },
    ],

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
    seo: {
        metaTitle: {
            type: String,
            default: "",
        },
        metaDescription: {
            type: String,
            default: "",
        },
    },
  },
  {
    timestamps: true,
  }
);

learningPathSchema.pre("save", function () {
  if (!this.isModified("title")) return;

  this.slug = createSlug(this.title);
});

learningPathSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform(doc, ret) {
    ret.id = ret._id.toString();

    delete ret._id;
  },
});

learningPathSchema.index({ slug: 1 }, { unique: true });

learningPathSchema.index({ title: "text" });

learningPathSchema.index({
  status: 1,
  visibility: 1,
  order: 1,
});

learningPathSchema.index({ deletedAt: 1, });

learningPathSchema.index({ difficulty: 1, });

learningPathSchema.index({ subscriptionType: 1, });

learningPathSchema.virtual("totalContent").get(function () {
  return this.estimatedModules + this.estimatedNotes;
});

learningPathSchema.virtual("url").get(function () {
  return `/learning-paths/${this.slug}`;
});