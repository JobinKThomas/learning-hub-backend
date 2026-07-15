import mongoose from "mongoose";

import baseContentSchema from "../../../../shared/schemas/baseContent.schema.js";

import NoteType from "../../../../shared/enums/noteType.enum.js";

const noteSchema = new mongoose.Schema(
  {
    ...baseContentSchema,

    topic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
      required: true,
      index: true,
    },

    type: {
      type: String,
      enum: Object.values(NoteType),
      default: NoteType.THEORY,
      index: true,
    },

    markdown: {
      type: String,
      required: true,
      trim: true,
    },

    plainText: {
      type: String,
      default: "",
    },

    wordCount: {
      type: Number,
      default: 0,
      min: 0,
    },

    readingTime: {
      type: Number,
      default: 0,
      min: 0,
    },

    excerpt: {
      type: String,
      default: "",
      maxlength: 300,
    },

    version: {
      type: Number,
      default: 1,
      min: 1,
    },

    isLatest: {
      type: Boolean,
      default: true,
      index: true,
    },

    estimatedPracticeTime: {
        type:Number,
        default:0,
        min:0
    }
  },
  {
    timestamps: true,
  }
);

/**
 * Indexes
 */

noteSchema.index({
  topic: 1,
  order: 1,
});

noteSchema.index({
  topic: 1,
  status: 1,
});

noteSchema.index({
  title: "text",
  plainText: "text",
});

export default mongoose.model(
  "Note",
  noteSchema
);