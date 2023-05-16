const { Traza } = require("../models/traza");

const getTrazas = async (req, res) => {
  try {
    const trazas = await Traza.findAll({
      limit: 10,
    });
    res.json(trazas);
  } catch (error) {
    return res.status(500).json({
      msg: error.message,
    });
  }
};

const getTrazaById = async (req, res) => {
  const { id } = req.params;
  try {
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
