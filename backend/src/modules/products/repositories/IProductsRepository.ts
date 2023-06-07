import { ICreateProductDTO } from "../dtos/ICreateProductDTO";
import { IUpdateProductsQuantityDTO } from "../dtos/IUpdateProductsQuantityDTO";
import { Product } from "../infra/typeorm/entities/Product";

interface IFindProducts {
  id: string;
}

interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<Product>;
  list(): Promise<Product[]>;
  findByName(name: string): Promise<Product | undefined>;
  findAllById(products: IFindProducts[]): Promise<Product[]>;
  findById(id: string): Promise<Product>;
  updateQuantity(products: IUpdateProductsQuantityDTO[]): Promise<Product[]>;
}

export { IProductsRepository };
