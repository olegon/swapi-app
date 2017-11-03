const app = require('./app');

const { PORT } = process.env;

if (PORT == null) throw new Error('A variável de ambiente PORT não foi especificada.');

app.listen(
    process.env.PORT,
    () => console.log(`Listeneting at http://localhost:${process.env.PORT}/`)
);