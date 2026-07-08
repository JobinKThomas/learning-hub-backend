// import mongoose from "mongoose";

// import baseContentSchema from "../../../../shared/schemas/baseContent.schema.js";

// const moduleSchema = new mongoose.Schema(
//   {
//     ...baseContentSchema,

//     learningPath: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "LearningPath",
//       required: true,
//       index: true,
//     },

//     estimatedHours: {
//       type: Number,
//       default: 0,
//       min: 0,
//     },

//     estimatedSections: {
//       type: Number,
//       default: 0,
//       min: 0,
//     },

//     estimatedNotes: {
//       type: Number,
//       default: 0,
//       min: 0,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// export default mongoose.model("Module", moduleSchema);

import mongoose from "mongoose";
import baseContentSchema from "../../../../shared/schemas/baseContent.schema.js";

const learningModuleSchema = new mongoose.Schema(
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

    estimatedLessons: {
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

export default mongoose.model("Module", learningModuleSchema);