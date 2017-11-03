const app = require('./app');

const { PORT, SQLITE_FILEPATH } = process.env;

if (PORT == null) throw new Error('A variável de ambiente PORT não foi especificada.');

if (SQLITE_FILEPATH == null) throw new Error('Variável de ambiente SQLITE_FILEPATH não encontrada.');

app.listen(
    process.env.PORT,
    () => console.log(`Listeneting at http://localhost:${process.env.PORT}/`)
);