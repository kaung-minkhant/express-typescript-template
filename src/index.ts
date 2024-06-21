import express, {Express, Request, Response} from 'express'
import * as dotenv from 'dotenv'
import ip from 'ip'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import { LoggerMiddleWare } from '@middlewares/logger';
import { router } from '@controllers/index'

dotenv.config();

const app: Express = express();
const PORT = process.env.SERVICE_PORT || 4000;
const SERVICE_NAME = process.env.SERVICE_NAME || 'Example'

app.get('/', (req: Request, res: Response)=> {
  res.status(200).send("OK")
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cookieParser())

app.use(LoggerMiddleWare)

app.use('/', router)

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