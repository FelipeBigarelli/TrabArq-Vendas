import { Router } from 'express';

import { usersRoutes } from './users.routes';
import { ordersRoutes } from './orders.routes';
import { productsRoutes } from './products.routes';
import { authenticateRoutes } from './authenticate.routes';

const router = Router();

router.use(authenticateRoutes);
router.use('/users', usersRoutes);
router.use('/products', productsRoutes);
router.use('/orders', ordersRoutes);

export { router };
