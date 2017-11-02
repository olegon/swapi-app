const app = require('./app');

app.listen(
    process.env.PORT,
    () => console.log(`Listeneting at http://localhost:${process.env.PORT}/`)
);