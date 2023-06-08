import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListOrderUseCase from './ListOrderUseCase';


class ListOrderController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listOrderUseCase = container.resolve(ListOrderUseCase);

    const order = await listOrderUseCase.execute(
      id
    );

    return response.json(order);
  }
}

export { ListOrderController };
