import { Request, Response } from 'express'

export const adaptRouter = (controller) => {
  return async (req: Request, resp: Response) => {
    const { statusCode, data } = await controller.handle(req);
    resp.status(statusCode).json(data);
  }
}