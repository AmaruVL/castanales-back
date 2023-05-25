const { Traza } = require("../models/traza");

const getTrazas = async (req, res) => {
  try {
    const trazas = await Traza.findAll({
      attributes: [
        "codigo_ant",
        "dni_ruc",
        "razon_social",
        "este",
        "norte",
        "observaciones",
      ],
      // limit: 5,
    });
    res.json(trazas);
  } catch (error) {
    return res.status(500).json({
      msg: error.message,
    });
  }
};

const getTrazaById = async (req, res) => {
  try {
    const { id } = req.params;
    const traza = await Traza.findByPk(id);
    if (!traza)
      return res.status(404).json({
        msg: `Traza ${id} no existe`,
      });
    res.json(traza);
  } catch (error) {
    return res.status(500).json({
      msg: error.message,
    });
  }
};

module.exports = {
  getTrazaById,
  getTrazas,
};

/*
  const { q, nombre = "no name", apikey } = req.query;

  res.json({
    msg: "get API - Controlador",
    nombre,
    apikey,
  });
*/
