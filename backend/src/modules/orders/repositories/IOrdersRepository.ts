import ICreateOrderDTO from "../dtos/ICreateOrderDTO";
import { Order } from "../infra/typeorm/entities/Order";

interface IOrdersRepository {
  create(data: ICreateOrderDTO): Promise<Order>;
  list(user_id: string): Promise<Order>;
  findById(id: string): Promise<Order | undefined>;
}

export { IOrdersRepository };
