import mongoose from "mongoose";

import baseContentSchema from "../../../../shared/schemas/baseContent.schema.js";

const sectionSchema = new mongoose.Schema(
  {
    ...baseContentSchema,

    learningPath: {
        type: ObjectId,
        ref: "LearningPath",
        required: true,
        index: true,
    },

    module: {
        type: ObjectId,
        ref: "Module",
        required: true,
        index: true,
    },

    estimatedNotes: {
        type: Number,
        default: 0,
        min: 0,
    }
 },
  {
    timestamps: true,
  }
);

export default mongoose.model("Section", sectionSchema);