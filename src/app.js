import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import swaggerUi from "swagger-ui-express";

import routes from "./routes/index.js";
import publicRoutes from "./api/public/index.js";

import swaggerSpec from "./config/swagger.js";

import errorHandler from "./middleware/error.middleware.js";

const app = express();

app.use(helmet());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(morgan("dev"));

app.use("/api", routes);

app.use("/api/public", publicRoutes);

/**
 * Swagger Documentation
 */
app.use(
  "/api/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

app.use(errorHandler);

export default app;