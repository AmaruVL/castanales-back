const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../config/database");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    //Conectar a BD
    this.conectarDB();
    //Middlewares
    this.middlewares();
    //Rutas de la aplicación
    this.routes();
  }

  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    //Cors
    this.app.use(cors());
    //Lectura y parseo del body
    this.app.use(express.json());
    //Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use("/api/trazabilidad", require("../routes/trazas"));
    this.app.use("/api/razonsocial", require("../routes/razonSocial"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
