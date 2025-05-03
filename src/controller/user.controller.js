import userService from '../service/user.services.js';

async function createUserController(req, res) {
    const newuser = req.body;
    
    try {
        const user = await userService.createUserService(newuser);
        res.status(201).send({user});
    } catch (error) {
        console.log("Cheguei aqui!");
        return res.status(400).send(error.message);
    }   
}

function createUserRepository(newuser) {
    return new Promise((resolve, reject) => {
        const { username, email, password, avatar } = newuser;
        db.run(`
            INSERT INTO users (username, email, password, avatar) 
            VALUES (?, ?, ?, ?)`
            , 
            [newuser.username, newuser.email, newuser.password, newuser.avatar], 
            function (err) {
            if (err) {
                reject(err);
            } else {
                resolve({id: this.lastID, ...newuser});                
            }
        });
    });
}

function findUserByEmail(email) {
    return new Promise((resolve, reject) => {
        db.get(`
            SELECT id, username, email, password, avatar
            FROM users
            WHERE email = ?
            `, [email], (err, row) => {  
            if (err) {
                reject(err);
            } else {
                resolve(row);
            }
        });
    });
}

export default {
    createUserController,
    createUserRepository,
    findUserByEmail
}