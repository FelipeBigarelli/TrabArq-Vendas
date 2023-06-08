import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindProductByIdUseCase } from './FindProductByIdUseCase';


class FindProductByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findProductByIdUseCase = container.resolve(FindProductByIdUseCase);

    const produto = await findProductByIdUseCase.execute(id);

    return response.status(201).json(produto);
  }
}

export { FindProductByIdController };
