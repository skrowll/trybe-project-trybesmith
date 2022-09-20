import { Request, Response } from 'express';
import * as orderService from '../services/order.service';

const getAll = async (_req: Request, res: Response) => {
  const { status, data } = await orderService.default();
  res.status(status).json(data);
};

export default getAll;