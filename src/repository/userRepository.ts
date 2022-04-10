import { UserDto } from "../dto/userDto";
import { User } from "../schema/userSchema";

class UserRepository {
  async get(): Promise<UserDto[]> {
    return await User.find();
  }

  async getEmail(email: any) {
    return await User.findOne({ email });
  }

  async create(user: UserDto) {
    return await User.create(user);
  }

  async update(email: string, dados: UserDto) {
    return await User.updateOne({ email }, dados);
  }

  async delete(email: string) {
    return await User.remove({ email });
  }
}

export default new UserRepository();
