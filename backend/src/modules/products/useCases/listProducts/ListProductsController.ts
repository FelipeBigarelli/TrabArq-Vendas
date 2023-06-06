import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListProdutosUseCase } from './ListProductsUseCase';


class ListProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listProductsUseCase = container.resolve(ListProdutosUseCase);

    const produtos = await listProductsUseCase.execute();

    return response.status(201).json(produtos);
  }
}

export { ListProductsController };
