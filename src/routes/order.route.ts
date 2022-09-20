import { Router } from 'express';
import * as orderController from '../controllers/order.controller';

const orderRouter = Router();

orderRouter.get('/', orderController.default);

export default orderRouter;