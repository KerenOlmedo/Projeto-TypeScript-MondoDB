import { UserDto } from '../dto/userDto';
import  { User }  from '../schema/userSchema';

class UserRepository{
    async get(): Promise<UserDto[]> {
        return await User.find()
    }

    async getEmail(email: any){
        return await User.findOne({email})
    }
    
    async create(user: UserDto) {
        return await User.create(user)
    }
}

export default new UserRepository()