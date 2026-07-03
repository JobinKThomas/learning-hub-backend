import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    refreshTokenHash: {
      type: String,
      required: true,
      select: false,
    },

    userAgent: {
      type: String,
      default: "",
    },

    ipAddress: {
      type: String,
      default: "",
    },

    expiresAt: {
      type: Date,
      required: true,
    },

    isRevoked: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model(
  "Session",
  sessionSchema
);