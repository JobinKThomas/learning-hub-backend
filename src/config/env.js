import dotenv from "dotenv";

dotenv.config();

const required = [
  "PORT",
  "MONGO_URI",
  "JWT_SECRET",
  "REFRESH_SECRET"
];

required.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing environment variable: ${key}`);
  }
});

export default {
  nodeEnv: process.env.NODE_ENV,
  port: Number(process.env.PORT),
  mongoUri: process.env.MONGO_URI,

  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },

  refresh: {
    secret: process.env.REFRESH_SECRET,
    expiresIn: process.env.REFRESH_EXPIRES_IN,
  },
};