import userRepository from '../repostitories/user.repositories.js';
import bcrypt from 'bcrypt';

async function createUserService(newuser) {
    const foundUser = await userRepository.findUserByEmail(newuser.email);
    if (foundUser) {
        throw new Error('Email já cadastrado');
    }   
    const salt = await bcrypt.genSalt(10);
    const passHash = await bcrypt.hash(newuser.password, salt);
    newuser.password = hashPassword;    
    const user = await userRepository.createUserRepository({
        ...newuser,
        password: passHash
    });
    if (!user) {
        throw new Error('Erro ao cadastrar usuário');
    }
    return user;
    
}

export default {
    createUserService
}