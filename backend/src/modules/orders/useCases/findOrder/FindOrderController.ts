import { Request, Response } from 'express';
import { container } from 'tsyringe';
import FindOrderUseCase from './FindOrderUseCase';


class FindOrderController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findOrderUseCase = container.resolve(FindOrderUseCase);

    const order = await findOrderUseCase.execute({
      id
    });

    return response.json(order);
  }
}

export { FindOrderController };
