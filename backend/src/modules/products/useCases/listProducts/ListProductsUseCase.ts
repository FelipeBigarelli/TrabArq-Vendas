import { Product } from '@modules/products/infra/typeorm/entities/Product';
import { IProductsRepository } from '@modules/products/repositories/IProductsRepository';
import { inject, injectable } from 'tsyringe';


@injectable()
class ListProdutosUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository
  ) {}

  async execute(): Promise<Product[]> {
    const product = await this.productsRepository.list();

    return product;
  }
}

export { ListProdutosUseCase };
