const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }

  if (req.url === "/api/courses") {
    res.write(
      JSON.stringify({ nombre: "daniel", aprellido: "morao", edad: 24 })
    );
    res.end();
  }
});

server.listen(3000);
console.log("Listenning on port 3000...");
