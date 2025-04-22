const express = require('express');
const app = express();

app.use(express.json());

const users = []

app.post("/users", (req, res) => {
const body = req.body
users.push(body)
res.status(201).send("Usuário criado com sucesso!")
});

app.get("/users", (req, res) => {
    res.send({message:"Esses são os usuários: ", users})
})

app.listen(3000, () => {
console.log(`Servidor rodando em http://localhost/3000 `);
});