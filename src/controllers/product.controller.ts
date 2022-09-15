import { Request, Response } from 'express';
import { IProduct } from '../interfaces/IProduct';
import * as productService from '../services/product.service';

export const getAll = async (_req: Request, res: Response) => {
  const { status, data } = await productService.getAll();
  res.status(status).json(data);
};

export const create = async (req: Request, res: Response) => {
  const product = req.body as IProduct;
  const { status, data } = await productService.create(product);
  res.status(status).json(data);
};