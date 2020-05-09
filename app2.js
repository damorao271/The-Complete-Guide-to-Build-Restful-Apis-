const Logger = require("./logger2");
const inicio = new Logger();

inicio.on("MeEscucho", (arg) => {
  console.log(arg);
});

inicio.log("Hola");
