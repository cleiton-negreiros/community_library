import db from '../config/database.js';

db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    avatar TEXT
)`
);

function createUserRepository(newuser) {
    return new Promise((resolve, reject) => {
        db.run(`INSERT INTO users (username, email, password, avatar) 
            VALUES (?, ?, ?, ?)`
            , 
            [newuser.username, newuser.email, newuser.password, newuser.avatar], 
            function (err) {
            if (err) {
                reject(err);
            } else {
                resolve({message: "Usuário criado com sucesso!"});
            }
        });
    });
}

export default {
 createUserRepository
}