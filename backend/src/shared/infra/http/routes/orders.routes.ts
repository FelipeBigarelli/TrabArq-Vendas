import { CreateOrderController } from '@modules/orders/useCases/createOrder/CreateOrderController';
import { FindOrderController } from '@modules/orders/useCases/findOrder/FindOrderController';
import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';


const ordersRoutes = Router();
const createOrdersController = new CreateOrderController();
const findOrderController = new FindOrderController();

ordersRoutes.post('/', ensureAuthenticated, createOrdersController.handle);
ordersRoutes.get('/:id', ensureAuthenticated, findOrderController.handle);

export { ordersRoutes };
