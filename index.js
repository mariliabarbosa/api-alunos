import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

const app = express();
const PORTA = 3030;

app.use(bodyParser.json());
app.use('/users', usersRoutes);

app.listen(PORTA, () => console.log(`Servidor rodando em http://localhost:${PORTA}`));

app.get('/', (req, res) => {
    res.send('Página inicial.');
})