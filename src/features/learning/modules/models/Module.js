import mongoose from "mongoose";

import baseContentSchema from "../../../../shared/schemas/baseContent.schema.js";

const moduleSchema = new mongoose.Schema(
  {
    ...baseContentSchema,

    learningPath: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LearningPath",
      required: true,
      index: true,
    },

    estimatedHours: {
      type: Number,
      default: 0,
      min: 0,
    },

    estimatedSections: {
      type: Number,
      default: 0,
      min: 0,
    },

    estimatedNotes: {
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
moduleSchema.index(
  {
    learningPath: 1,
    order: 1,
  }
);

moduleSchema.index(
  {
    learningPath: 1,
    status: 1,
  }
);

moduleSchema.index(
  {
    slug: 1,
  },
  {
    unique: true,
  }
);

moduleSchema.index({
  title: "text",
});

/**
 * Virtuals
 */
moduleSchema.virtual("totalContent").get(function () {
  return (
    this.estimatedSections +
    this.estimatedNotes
  );
});

moduleSchema.virtual("url").get(function () {
  return `/modules/${this.slug}`;
});

/**
 * JSON Transform
 */
moduleSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform(doc, ret) {
    ret.id = ret._id.toString();

    delete ret._id;
  },
});

export default mongoose.model(
  "Module",
  moduleSchema
);