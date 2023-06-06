import { Product } from "@modules/products/infra/typeorm/entities/Product";
import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
  name: string;
  price: number;
  quantity: number;
}

@injectable()
class CreateProductUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({ name, price, quantity }: IRequest): Promise<Product> {
    const findProductIfExists = await this.productsRepository.findByName(name);

    if (findProductIfExists) {
      throw new AppError('Product already exists!');
    }

    const product = await this.productsRepository.create({
      name,
      price,
      quantity,
    });

    return product;
  }
}

export { CreateProductUseCase };
