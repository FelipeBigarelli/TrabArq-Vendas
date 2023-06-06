import { IProductsRepository } from '@modules/products/repositories/IProductsRepository';
import { getRepository, In, Repository } from 'typeorm';
import { Product } from '../entities/Product';
import { ICreateProductDTO } from '@modules/products/dtos/ICreateProductDTO';
import { IUpdateProductsQuantityDTO } from '@modules/products/dtos/IUpdateProductsQuantityDTO';

interface IFindProducts {
  id: string;
}

class ProductsRepository implements IProductsRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = getRepository(Product);
  }
  findById(id: string): Promise<Product> {
    throw new Error('Method not implemented.');
  }

  async create({
    name,
    price,
    quantity,
  }: ICreateProductDTO): Promise<Product> {
    const product = this.repository.create({
      name,
      price,
      quantity,
    });

    await this.repository.save(product);

    return product;
  }

  async list(): Promise<Product[]> {
    const products = await this.repository.find();

    return products;
  }

  async findByName(name: string): Promise<Product | undefined> {
    const findProductByName = await this.repository.findOne({
      where: { name },
    });

    return findProductByName;
  }

  async findAllById(products: IFindProducts[]): Promise<Product[]> {
    const productId = products.map(product => product.id);

    const findAllProductsById = await this.repository.find({
      where: {
        id: In(productId), // verificar se nesse array tem algum produto
      },
    });

    return findAllProductsById;
  }

  async updateQuantity(
    products: IUpdateProductsQuantityDTO[],
  ): Promise<Product[]> {
    return this.repository.save(products);
  }
}

export { ProductsRepository };
