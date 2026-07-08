import mongoose from "mongoose";

import baseContentSchema from "../../../../shared/schemas/baseContent.schema.js";

import Difficulty from "../../../../shared/enums/difficulty.enum.js";
import Visibility from "../../../../shared/enums/visibility.enum.js";
import SubscriptionType from "../../../../shared/enums/subscription.enum.js";
import ContentStatus from "../../../../shared/enums/contentStatus.enum.js";
import createSlug from "../../../../shared/utils/slug.util.js";

const learningPathSchema = new mongoose.Schema(
  {
    ...baseContentSchema,

    difficulty: {
      type: String,
      enum: Object.values(Difficulty),
      default: Difficulty.BEGINNER,
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

    banner: {
      type: String,
      default: null,
    },

    tags: [
        {
            type: String,
            trim: true,
            lowercase: true,
        },
    ],
    
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