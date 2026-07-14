import mongoose from "mongoose";

import baseContentSchema from "../../../../shared/schemas/baseContent.schema.js";
import createSlug from "../../../../shared/services/slugify.service.js";

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
 * Generate slug
 */
sectionSchema.pre("save", function (next) {
  if (this.isModified("title")) {
    this.slug = createSlug(this.title);
  }

  next();
});

/**
 * JSON Transform
 */
sectionSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform(doc, ret) {
    ret.id = ret._id;

    delete ret._id;
  },
});

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

sectionSchema.index({
  slug: 1,
});

sectionSchema.index({
  title: "text",
});

sectionSchema.index({
  status: 1,
  visibility: 1,
});

/**
 * Virtuals
 */
sectionSchema.virtual("isRoot").get(function () {
  return !this.parentSection;
});


export default mongoose.model("Section", sectionSchema);