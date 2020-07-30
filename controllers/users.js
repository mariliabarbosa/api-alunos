import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => res.send(users);

export const postUsers = (req, res) => {
    const user = req.body;

    const userWithId = {... user, id: uuidv4()};
    
    users.push(userWithId);

    res.send(`O usuário de nome ${user.nome} foi adicionado ao banco de dados.`);
}

export const getUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id == id);
    
    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.send(`O usuário de id ${id} foi removido do banco de dados.`);
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    
    const user = users.find((user) => user.id == id);
    
    const { nome, email, numero_matricula, curso } = req.body;

    if (nome) user.nome = nome;

    if (email) user.email = email;

    if (numero_matricula) user.numero_matricula = numero_matricula;

    if (curso) user.curso = curso;

    res.send(`O usuário de id ${id} foi alterado`);
}