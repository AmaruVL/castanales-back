const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || "development";
let config = require(__dirname + "./../config/config")[env];

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
})

const dbConnection = async() => {
  try {
    await sequelize.authenticate() //Probar conexion
    console.log('Conectado a la BD correctamente')
    await sequelize.sync({force: false}) // sincronizar DB (crear tablas)
  } catch (error) {
    console.error('No se pudo conectar a la BD:', error)
  }
}

module.exports = {
  sequelize,
  dbConnection
}