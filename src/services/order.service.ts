import * as ordersModel from '../models/order.model';

const getAll = async () => {
  const data = await ordersModel.default();
  return { status: 200, data };
};

export default getAll;