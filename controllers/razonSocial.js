const { formatStats } = require("../helpers/formatData");
const { Traza } = require("../models/traza");

const getPersonas = async (req, res) => {
  try {
    const personas = await Traza.findAll({
      attributes: ["razon_social", "dni_ruc", "edad", "nro_celular"],
      group: ["razon_social", "dni_ruc", "edad", "nro_celular"],
    });
    res.json(personas);
  } catch (error) {
    return res.status(500).json({
      msg: error.message,
    });
  }
};

module.exports = {
  getPersonas
};
