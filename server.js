const http = require("http");
const fs = require("fs");
const express = require("express");

const app = express();
const PORT = 8080;
app.use(express.static(__dirname + '/public'));
app.listen(8080);

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      const data = fs.readFileSync("./frontendcode/index.html");
      res.write(data);
    } else if (req.url === "/about") {
      const data = fs.readFileSync("./frontendcode/about.html");
      res.write(data);
    } else if (req.url === "/projects") {
      const data = fs.readFileSync("./frontendcode/projects.html");
      res.write(data);
    } else if (req.url === "/index.css") {
      const data = fs.readFileSync("./frontendcode/index.css");
      res.write(data);
    } else if (req.url === "/about.css") {
      const data = fs.readFileSync("./frontendcode/about.css");
      res.write(data);
    } else if (req.url === "/projects.css") {
      const data = fs.readFileSync("./frontendcode/projects.css");
      res.write(data);
    } else {
      const data = fs.readFileSync("./frontendcode/pagenotfound.html");
      res.write(data);
    }
  } else {
    res.write("We dont handle methods other than GET");
  }

  res.end();
});

// After the server is created, we need to bind it to a specific network address. It is done with the help of server.listen() method. It accepts three parameters: port, host, and a callback function that is triggered when the server starts to listen. 
server.listen(8080, "localhost", () =>
  console.log("Server is running on port:" + PORT)
);
