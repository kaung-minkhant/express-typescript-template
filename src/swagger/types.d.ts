import swaggerJSDoc, { SwaggerDefinition } from "swagger-jsdoc";

interface TSwaggerServer {
  url: string;
  description: string;
}

interface TObjectProperties {
  type: string;
  description: string;
}

interface TSwaggerResponse {
  description: string;
  content: 'application/json';
}

interface TObjectSchema {
  type: "object";
  required?: string[];
  properties: Record<string, TObjectProperties>;
}
interface TPrimitiveSchema {
  type: "string" | 'number';
}
type TSchema = TPrimitiveSchema | TObjectSchema;

interface TSwaggerDefinition extends SwaggerDefinition {
  servers?: TSwaggerServer[];
  components: {
    schemas?: Record<string, TSchema>;
    responses?: Record<string, TSwaggerResponse>;
  };
}

export interface TSwaggerOptions extends swaggerJSDoc.Options {
  definition: TSwaggerDefinition;
}