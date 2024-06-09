import express, {Express, Request, Response} from 'express'
import * as dotenv from 'dotenv'
import ip from 'ip'
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express'
import { options } from './swagger/swagger';

dotenv.config();

const app: Express = express();
const PORT = process.env.SERVICE_PORT || 4000;
const SERVICE_NAME = process.env.SERVICE_NAME || 'Example'


const specs = swaggerJSDoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

// middleswares

/**
 * @swagger
 * tags:
 *   name: Sample
 *   description: Sample API
 */

/**
 * @swagger
 *   /:
 *     get:
 *       summary: 'Check if service is healthy'
 *       tags: [Sample] 
 */
app.get('/', (req: Request, res: Response)=> {
  res.status(200).send("OK")
})

const server = app.listen(PORT, () => {
  console.log(`${SERVICE_NAME} Service is running on ${ip.address()}:${PORT}`)
})

async function closeGracefully(signal: any) {
  console.log(`*^!@4=> Received signal to terminate: ${signal}`);

  server.close(() => {
    console.log(`${SERVICE_NAME} Service closed`)
  });
  process.kill(process.pid, signal);
}

process.once("SIGINT", closeGracefully);
process.once("SIGTERM", closeGracefully);