import mongoose from "mongoose";

import baseContentSchema from "../../../../shared/schemas/baseContent.schema.js";

const topicSchema = new mongoose.Schema(
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

    section: {
        type: ObjectId,
        ref: "Section",
        required: true,
        index: true,
    },

    parentTopic: {
        type: ObjectId,
        ref: "Topic",
        default: null,
        index: true,
    },

    estimatedMinutes: {
        type: Number,
        default: 10,
        min: 1,
    },

    readingTime: {
        type: Number,
        default: 0,
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Topic", topicSchema);