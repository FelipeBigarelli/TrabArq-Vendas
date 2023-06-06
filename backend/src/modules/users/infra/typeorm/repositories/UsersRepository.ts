import { getRepository, Repository } from 'typeorm';

import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';

import { User } from '../entities/User';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    id,
    name,
  }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      id,
      name,
    });

    await this.repository.save(user);

    return user;
  }

  async list(): Promise<User[]> {
    const users = await this.repository.find();

    return users;
  }

  async findById(id: string): Promise<User | undefined> {
    const user = await this.repository.findOne(id);

    return user;
  }
}

export { UsersRepository };
