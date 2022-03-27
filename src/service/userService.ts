import   UserRepository   from '../repository/userRepository';

class UserService {
    async getAll(){
        const users = await UserRepository.get()
        return users
    }
}


export default new UserService()