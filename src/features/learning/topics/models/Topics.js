import mongoose from "mongoose";

import baseContentSchema from "../../../../shared/schemas/baseContent.schema.js";

import createSlug from "../../../../shared/services/slugify.service.js";

const topicSchema = new mongoose.Schema(
  {
    ...baseContentSchema,

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

    estimatedMinutes: {
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

    seo: {
      type: new mongoose.Schema(
        {
          metaTitle: String,
          metaDescription: String,
        },
        { _id: false }
      ),
      default: () => ({}),
    },
  },
  {
    timestamps: true,
  }
);

/**
 * Generate slug
 */
topicSchema.pre("save", function (next) {
  if (this.isModified("title")) {
    this.slug = createSlug(this.title);
  }

  next();
});

/**
 * JSON Transform
 */
topicSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform(doc, ret) {
    ret.id = ret._id.toString();

    delete ret._id;
    delete ret.__v;
  },
});

/**
 * Indexes
 */
topicSchema.index({ slug: 1 }, { unique: true });

topicSchema.index({ title: "text" });

topicSchema.index({
  learningPath: 1,
  module: 1,
  section: 1,
});

topicSchema.index({
  status: 1,
  visibility: 1,
  order: 1,
});

topicSchema.index({
  deletedAt: 1,
  status: 1,
});

/**
 * Virtuals
 */
topicSchema.virtual("url").get(function () {
  return `/topics/${this.slug}`;
});

export default mongoose.model(
  "Topic",
  topicSchema
);