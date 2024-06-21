import { NextFunction, Request, Response } from "express"

export function LoggerMiddleWare(req: Request, res: Response, next: NextFunction) {
  const request: Request & {time?: string} = req;
  request.time = new Date(Date.now()).toString()
  console.log(request.method, request.hostname, request.path, request.time )
  console.log('Body >>', req.body)
  console.log('Headers >>', req.headers)
  console.log('Cookies >>', req.cookies)

  next()
}