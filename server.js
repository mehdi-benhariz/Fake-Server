//TODO : change this code so it uses different database based on URL
// JSON Server module
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("mic-questions-db.json");

// Make sure to use the default middleware
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
// Add this before server.use(router)
server.use(
  // Add custom route here if needed
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);
server.use(router);
// Listen to port
server.listen(process.env.PORT || 3000, () => {
  console.log("JSON Server is running");
});

