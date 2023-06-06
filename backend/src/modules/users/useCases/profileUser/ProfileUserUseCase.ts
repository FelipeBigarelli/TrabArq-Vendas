import { inject, injectable } from 'tsyringe';

import { IUserResponseDTO } from '@modules/users/dtos/IUserResponseDTO';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';

@injectable()
class ProfileUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(id: string): Promise<IUserResponseDTO> {
    const user = await this.usersRepository.findById(id);

    return user;
  }
}

export { ProfileUserUseCase };
