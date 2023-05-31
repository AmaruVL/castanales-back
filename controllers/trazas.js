const { sequelize } = require("../config/database");
const { formatStats } = require("../helpers/formatData");
const { getQueryStats } = require("../helpers/queries");
const { Traza } = require("../models/traza");
const { QueryTypes } = require("sequelize");

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

const getTrazaStatsById = async (req, res) => {
  //Obtener estadisticas de una persona por si dni o ruc
  //Si id es -1, se obtendrán las estadisticas de todos
  try {
    const { id } = req.params;
    const stringQueryStats = getQueryStats(id);
    const [stats] = await sequelize.query(stringQueryStats, {
      type: QueryTypes.SELECT,
    });
    res.json(formatStats(stats));
  } catch (error) {
    return res.status(500).json({
      msg: error.message,
    });
  }
};

module.exports = {
  getTrazaById,
  getTrazas,
  getTrazaStatsById,
};
