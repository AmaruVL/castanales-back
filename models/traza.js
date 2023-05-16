const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Traza = sequelize.define(
  "traza",
  {
    codigo_ant: {
      type: DataTypes.STRING(15),
      primaryKey: true,
    },
    codigo_de_la_parcela: {
      type: DataTypes.STRING(10),
    },
    razon_social: {
      type: DataTypes.STRING(64),
    },
    dni_ruc: {
      type: DataTypes.STRING(11),
    },
    edad: {
      type: DataTypes.INTEGER,
    },
    sector: {
      type: DataTypes.STRING(45),
    },
    distrito: {
      type: DataTypes.STRING(45),
    },
    provincia: {
      type: DataTypes.STRING(45),
    },
    departamento: {
      type: DataTypes.STRING(45),
    },
    nombre_del_area_castanera: {
      type: DataTypes.STRING(45),
    },
    nro_de_contrato: {
      type: DataTypes.STRING(45),
    },
    nombre_cientifico: {
      type: DataTypes.STRING(45),
    },
    nro_de_arbol: {
      type: DataTypes.INTEGER,
    },
    nro_de_estrada: {
      type: DataTypes.INTEGER,
    },
    dap: {
      type: DataTypes.DECIMAL(6, 2),
    },
    ht: {
      type: DataTypes.DECIMAL(6, 2),
    },
    este: {
      type: DataTypes.STRING(15),
    },
    norte: {
      type: DataTypes.STRING(15),
    },
    productivo: {
      type: DataTypes.STRING(2),
    },
    semillero: {
      type: DataTypes.STRING(2),
    },
    produccion_latas: {
      type: DataTypes.DECIMAL(6, 2),
    },
    juvenil_o_maduro: {
      type: DataTypes.STRING(15),
    },
    sano_o_enfermo: {
      type: DataTypes.STRING(15),
    },
    rama_caida: {
      type: DataTypes.STRING(2),
    },
    lianas: {
      type: DataTypes.STRING(2),
    },
    cerca_a_area_deforestada: {
      type: DataTypes.STRING(2),
    },
    dentro_de_area_deforestada: {
      type: DataTypes.STRING(2),
    },
    cerca_a_carretera: {
      type: DataTypes.STRING(2),
    },
    en_estrada: {
      type: DataTypes.STRING(2),
    },
    campamento: {
      type: DataTypes.STRING(2),
    },
    banho: {
      type: DataTypes.STRING(2),
    },
    realiza_quemas: {
      type: DataTypes.STRING(2),
    },
    combustible_para_transporte: {
      type: DataTypes.STRING(2),
    },
    nro_celular: {
      type: DataTypes.STRING(15),
    },
    observaciones: {
      type: DataTypes.STRING(128),
    },
  },
  {
    timestamps: false, // updated, created values in table
  }
);

module.exports = {
  Traza,
};
