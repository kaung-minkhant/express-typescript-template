import dotenv from "dotenv";
import { TSwaggerOptions } from "./types";

dotenv.config();

export const options: TSwaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Sample Swagger Docs",
      version: "1.0.0",
      description: `Sample Swagger Documentation for ${process.env.SERVICE_NAME || 'Example Service'}`,
    },
    servers: [
      {
        url: `http://localhost:${process.env.SERVICE_PORT}`,
        description: "Development Server",
      },
    ],
    components: {
      schemas: {
        Sample: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'ID of the sample'
            },
            name: {
              type: 'string',
              description: 'Name of the sample'
            }
          }
        }
      },
      responses: {
        '200': {
          content: 'application/json',
          description: 'Server is OK!'
        }
      },
    },
  },
  apis: ["./src/**/*.ts"],
};
