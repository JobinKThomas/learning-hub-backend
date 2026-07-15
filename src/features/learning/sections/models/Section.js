import mongoose from "mongoose";

import baseContentSchema from "../../../../shared/schemas/baseContent.schema.js";

const sectionSchema = new mongoose.Schema(
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

    parentSection: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
      default: null,
      index: true,
    },

    level: {
      type: Number,
      default: 1,
      min: 1,
    },

    /**
     * Example:
     * javascript/variables
     */
    path: {
      type: String,
      default: "",
      index: true,
    },

    childrenCount: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * Indexes
 */
sectionSchema.index({
  learningPath: 1,
  module: 1,
});

sectionSchema.index({
  module: 1,
  parentSection: 1,
  order: 1,
});

sectionSchema.index(
  {
    slug: 1,
  },
  {
    unique: true,
  }
);

sectionSchema.index({
  title: "text",
});

sectionSchema.index({
  status: 1,
  visibility: 1,
});

sectionSchema.index({
  deletedAt: 1,
  status: 1,
});

/**
 * Virtuals
 */
sectionSchema.virtual("isRoot").get(function () {
  return this.parentSection === null;
});

sectionSchema.virtual("url").get(function () {
  return `/sections/${this.slug}`;
});

/**
 * JSON Transform
 */
sectionSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform(doc, ret) {
    ret.id = ret._id.toString();

    delete ret._id;
  },
});

export default mongoose.model(
  "Section",
  sectionSchema
);