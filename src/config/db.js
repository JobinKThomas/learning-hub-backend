import mongoose from "mongoose";
import env from "./env.js";
import logger from "../shared/logger.js";

const connectDB = async () => {
  try {
    await mongoose.connect(env.mongoUri);

    logger.info("✅ MongoDB Connected");
  } catch (error) {
    logger.error(`MongoDB Error: ${error.message}`);

    process.exit(1);
  }
};

export default connectDB;