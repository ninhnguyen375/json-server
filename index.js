const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT;

server.use(middlewares);
server.use(router);

app.listen(port, () => console.log('Starting...'));
