import { getRepository, Repository } from 'typeorm';


import { Order } from '../entities/Order';
import { IOrdersRepository } from '@modules/orders/repositories/IOrdersRepository';
import ICreateOrderDTO from '@modules/orders/dtos/ICreateOrderDTO';

class OrdersRepository implements IOrdersRepository {
  private repository: Repository<Order>;

  constructor() {
    this.repository = getRepository(Order);
  }

  async create({
    user,
    products
  }: ICreateOrderDTO): Promise<Order> {
    const createOrder = this.repository.create({
      user,
      order_products: products
    });

    await this.repository.save(createOrder);

    return createOrder;
  }

  async findById(id: string): Promise<Order | undefined> {
    const order = await this.repository.findOne(id);

    return order;
  }

  async list(user_id: string): Promise<Order> {
    const orders = await this.repository.findOne(user_id);

    return orders;
  }
}

export { OrdersRepository };
