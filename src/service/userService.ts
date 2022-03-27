import { UserDto } from '../dto/userDto';
import   UserRepository   from '../repository/userRepository';

class UserService {
    async getAll(){
        const users = await UserRepository.get()
        return users
    }

    async create(user: UserDto){
        const email = await UserRepository.getEmail(user.email)
        if (email) {
            throw new Error('Email ja cadastrado')
        }
        return await UserRepository.create(user)
    }
}


export default new UserService()