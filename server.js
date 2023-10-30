const jsonServer = require('json-server');
const server = jsonServer.create();
const fileName = "booky-db.json";
const router = jsonServer.router(fileName);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);