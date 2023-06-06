import { container } from 'tsyringe';

import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { OrdersRepository } from '@modules/orders/infra/typeorm/repositories/OrdersRepository';
import { IOrdersRepository } from '@modules/orders/repositories/IOrdersRepository';
import { IProductsRepository } from '@modules/products/repositories/IProductsRepository';
import { ProductsRepository } from '@modules/products/infra/typeorm/repositories/ProductsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository,
);

container.registerSingleton<IOrdersRepository>(
  'OrdersRepository',
  OrdersRepository
);
