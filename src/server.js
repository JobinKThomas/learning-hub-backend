import app from "./app.js";
import connectDB from "./config/db.js";
import env from "./config/env.js";
import logger from "./shared/logger.js";

const startServer = async () => {
  try {
    await connectDB();

    app.listen(env.port, () => {
      logger.info(
        `🚀 Learning Hub API running on http://localhost:${env.port}`
      );
    });
  } catch (error) {
    logger.error(error.message);

    process.exit(1);
  }
};

startServer();