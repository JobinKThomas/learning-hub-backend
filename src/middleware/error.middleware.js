import logger from "../shared/logger.js";

const errorHandler = (err, req, res, next) => {
  logger.error(err.stack); // 👈 instead of err.message

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
    errors: err.errors || [],
  });
};

export default errorHandler;