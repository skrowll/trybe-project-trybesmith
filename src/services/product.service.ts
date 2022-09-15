import { IProduct } from '../interfaces/IProduct';
import * as productModel from '../models/product.model';

const getAll = async () => {
  const data = await productModel.getAll();
  return { status: 200, data };
};

const create = async (product: IProduct) => {
  const data = await productModel.create(product);
  return { status: 201, data };
};

export { getAll, create };
