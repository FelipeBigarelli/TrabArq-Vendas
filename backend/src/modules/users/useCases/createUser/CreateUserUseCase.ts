import { inject, injectable } from 'tsyringe';

import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { User } from '@modules/users/infra/typeorm/entities/User';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ name }: ICreateUserDTO): Promise<User> {
    const user = await this.usersRepository.create({
      name,
    });

    return user;
  }
}

export { CreateUserUseCase };
