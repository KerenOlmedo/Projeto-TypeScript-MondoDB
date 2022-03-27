import { UserDto } from '../dto/userDto';
import  { User }  from '../schema/userSchema';

class UserRepository{
    async get(): Promise<UserDto[]> {
        return await User.find()
    }
}

export default new UserRepository()