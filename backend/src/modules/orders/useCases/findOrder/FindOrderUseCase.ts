import { Order } from '@modules/orders/infra/typeorm/entities/Order';
import { IOrdersRepository } from '@modules/orders/repositories/IOrdersRepository';
import { IProductsRepository } from '@modules/products/repositories/IProductsRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  id: string;
}

@injectable()
class FindOrderUseCase {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,

    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Order | undefined> {
    const findOrder = await this.ordersRepository.findById(id);

    return findOrder;
  }
}

export default FindOrderUseCase;
