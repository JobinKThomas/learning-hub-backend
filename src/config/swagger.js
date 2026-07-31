import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.3",

    info: {
      title: "LearnHub API",

      version: "1.0.0",

      description:
        "REST API documentation for LearnHub Backend.",
    },

    servers: [
      {
        url: "http://localhost:5000/api",
        description: "Local",
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",

          scheme: "bearer",

          bearerFormat: "JWT",
        },
      },
    },

    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  apis: [
    "./src/docs/**/*.js",
  ]
};

const swaggerSpec = swaggerJsdoc(
  options
);

export default swaggerSpec;