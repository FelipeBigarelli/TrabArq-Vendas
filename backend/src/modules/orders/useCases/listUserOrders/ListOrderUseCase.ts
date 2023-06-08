import { Order } from '@modules/orders/infra/typeorm/entities/Order';
import { IOrdersRepository } from '@modules/orders/repositories/IOrdersRepository';
import { IProductsRepository } from '@modules/products/repositories/IProductsRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  id: string;
}

@injectable()
class ListOrderUseCase {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
  ) {}

  public async execute(user_id: string): Promise<Order | undefined> {
    const findOrder = await this.ordersRepository.list(user_id);

    return findOrder;
  }
}

export default ListOrderUseCase;
