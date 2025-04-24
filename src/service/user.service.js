import userRepository from '../repostitories/user.repositories.js';

async function createUserService(newuser) {
    const user = await userRepository.createUserRepository(newuser);
    return user;
}

export default {
    createUserService
}