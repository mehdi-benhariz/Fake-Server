// JSON Server module
const jsonServer = require("json-server");
const server = jsonServer.create();
const express = require("express");
const path = require("path");
const fs = require("fs");
const router = jsonServer.router("booky-db.json");

// Make sure to use the default middleware
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(express.static(path.join(__dirname, 'public')));

server.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "public/admin.html"));
});
// Function to create router dynamically based on the provided database file name
function createRouter(databaseFileName) {
  return jsonServer.router(databaseFileName);
}

// Read the database file name from "current-db.txt"
let currentDBFileName = fs.readFileSync("current-db.txt", "utf8").trim();
if (process.env.DB_NAME)
  currentDBFileName = `${process.env.DB_NAME}.json`;

let router = createRouter(currentDBFileName);



// Add this before server.use(router)
server.use(
  // Add custom route here if needed
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);
server.get("/list-databases", (req, res) => {
  fs.readdir(__dirname, (err, files) => {
    if (err)
      res.status(500).send("Error listing databases");
    else {
      const jsonFiles = files.filter(file => file.endsWith("-db.json"));
      res.json(jsonFiles);
    }
  });
});

//TODO find a solution for instant update of the database
server.post("/update-database", (req, res) => {
  const newFile = req.body.fileName;

  // Update the value inside the "current-db.txt" file with the new database file name
  fs.writeFile("current-db.txt", newFile, (err) => {
    if (err) {
      res.status(500).send("Error updating current-db.txt");
    } else {

      currentDBFileName = newFile;
      router = createRouter(currentDBFileName); // Update router dynamically
      server.use(router);

      res.status(200).send(`Now serving ${newFile}`);

    }
  });
});
server.use(router);
// Listen to port
let listener = server.listen(process.env.PORT || 3000, () => {
  console.log("JSON Server is running");
});


// Export the Server API
module.exports = server;