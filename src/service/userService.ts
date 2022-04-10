import { UserDto } from "../dto/userDto";
import UserRepository from "../repository/userRepository";

class UserService {
  async getAll() {
    const users = await UserRepository.get();
    return users;
  }

  async create(user: UserDto) {
    const email = await UserRepository.getEmail(user.email);
    if (email) {
      throw new Error("Email ja cadastrado");
    }
    return await UserRepository.create(user);
  }

  async update(email: string, dados: UserDto) {
    const buscaEmail = await UserRepository.getEmail(email);
    if (!buscaEmail) {
      throw new Error("Email não encontrado!");
    }
    return await UserRepository.update(email, dados);
  }

  async delete(email: string) {
    const buscaEmail = await UserRepository.getEmail(email);
    if (!buscaEmail) {
      throw new Error("Email não encontrado!");
    }
    return await UserRepository.delete(email);
  }
}

export default new UserService();
