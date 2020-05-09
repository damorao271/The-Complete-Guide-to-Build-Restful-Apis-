const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(mensaje) {
    console.log("El mensaje es: ", mensaje);

    this.emit("MeEscucho", { id: 1, url: "http://Daniel" });
  }
}

module.exports = Logger;
