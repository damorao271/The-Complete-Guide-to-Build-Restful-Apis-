const EventEmitter = require("events");
const emitter = new EventEmitter();

var url = "http://mylogger.io/log";

class Logger extends EventEmitter {
  log(message) {
    // Send an HTTP request
    console.log(message);
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}

module.exports = Logger;
// console.log(module);
// console.log(__filename);
// console.log(__dirname);
