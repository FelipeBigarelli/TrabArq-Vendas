import { CreateOrderController } from '@modules/orders/useCases/createOrder/CreateOrderController';
import { FindOrderController } from '@modules/orders/useCases/findOrder/FindOrderController';
import { Router } from 'express';


const ordersRoutes = Router();
const createOrdersController = new CreateOrderController();
const findOrderController = new FindOrderController();

ordersRoutes.post('/', createOrdersController.handle);
ordersRoutes.get('/:id', findOrderController.handle);

export { ordersRoutes };
