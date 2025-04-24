import userService from '../service/user.service.js';

async function createUserController(req, res) {
    const newuser = req.body;
    
    try {
        const user = await userService.createUserService(newuser);
        res.status(201).send({user});
    } catch (error) {
        return res.status(400).send({error: error.message});
    }   
}

export default {
    createUserController
}