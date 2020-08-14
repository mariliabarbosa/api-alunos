import express from 'express';
import routes from './routes/index.js';

const app = express();
const PORT = 3030;

app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

app.get('/', (req, res) => {
    res.send('Página inicial.');
})