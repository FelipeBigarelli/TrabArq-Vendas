import { Product } from '@modules/products/infra/typeorm/entities/Product';
import { IProductsRepository } from '@modules/products/repositories/IProductsRepository';
import { inject, injectable } from 'tsyringe';


@injectable()
class FindProductByIdUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository
  ) {}

  async execute(id: string): Promise<Product> {
    const product = await this.productsRepository.findById(id);

    return product;
  }
}

export { FindProductByIdUseCase };
