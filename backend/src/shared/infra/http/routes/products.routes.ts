import { CreateProductController } from '@modules/products/useCases/createProduct/CreateProductController';
import { FindProductByIdController } from '@modules/products/useCases/findProductById/FindProductByIdController';
import { ListProductsController } from '@modules/products/useCases/listProducts/ListProductsController';
import { Router } from 'express';

const productsRoutes = Router();

const createProductController = new CreateProductController();
const listProductsController = new ListProductsController();
const findProductByIdController = new FindProductByIdController();

productsRoutes.post('/', createProductController.handle);
productsRoutes.get('/', listProductsController.handle);
productsRoutes.get('/', findProductByIdController.handle);

export { productsRoutes };
