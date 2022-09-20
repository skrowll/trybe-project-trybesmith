import connection from './connection';
import { IOrder } from '../interfaces/IOrder';

const getAll = async (): Promise<IOrder[]> => {
  const query = (
    `SELECT orders.id AS id, orders.userId AS userId,
    JSON_ARRAYAGG(products.id) as productsIds
    FROM Trybesmith.Orders as orders
    INNER JOIN Trybesmith.Products as products
    ON orders.id = products.orderId
    GROUP BY orders.id
    ORDER BY orders.userId ASC`
  );

  const [orders] = await connection.execute(query);

  return orders as IOrder[];
};

export default getAll;