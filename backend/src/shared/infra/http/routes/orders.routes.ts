import { CreateOrderController } from '@modules/orders/useCases/createOrder/CreateOrderController';
import { FindOrderController } from '@modules/orders/useCases/findOrder/FindOrderController';
import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ListOrderController } from '@modules/orders/useCases/listUserOrders/ListOrderController';


const ordersRoutes = Router();
const createOrdersController = new CreateOrderController();
const findOrderController = new FindOrderController();
const listOrderController = new ListOrderController();

ordersRoutes.post('/', ensureAuthenticated, createOrdersController.handle);
ordersRoutes.get('/:id', ensureAuthenticated, findOrderController.handle);
ordersRoutes.get('/', ensureAuthenticated, listOrderController.handle);

export { ordersRoutes };
