const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Traza = sequelize.define(
  "traza",
  {
    codigo_ant: {
      type: DataTypes.VARCHAR(15),
      primaryKey: true,
    },
    codigo_de_la_parcela: {
      type: DataTypes.VARCHAR(10),
    },
    razon_social: {
      type: DataTypes.VARCHAR(64),
    },
    dni_ruc: {
      type: DataTypes.VARCHAR(11),
    },
    edad: {
      type: DataTypes.INTEGEREGER,
    },
    sector: {
      type: DataTypes.VARCHAR(45),
    },
    distrito: {
      type: DataTypes.VARCHAR(45),
    },
    provincia: {
      type: DataTypes.VARCHAR(45),
    },
    departamento: {
      type: DataTypes.VARCHAR(45),
    },
    nombre_del_area_castanera: {
      type: DataTypes.VARCHAR(45),
    },
    nro_de_contrato: {
      type: DataTypes.VARCHAR(45),
    },
    nombre_cientifico: {
      type: DataTypes.VARCHAR(45),
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
      type: DataTypes.VARCHAR(15),
    },
    norte: {
      type: DataTypes.VARCHAR(15),
    },
    productivo: {
      type: DataTypes.VARCHAR(2),
    },
    semillero: {
      type: DataTypes.VARCHAR(2),
    },
    produccion_latas: {
      type: DataTypes.DECIMAL(6, 2),
    },
    juvenil_o_maduro: {
      type: DataTypes.VARCHAR(15),
    },
    sano_o_enfermo: {
      type: DataTypes.VARCHAR(15),
    },
    rama_caida: {
      type: DataTypes.VARCHAR(2),
    },
    lianas: {
      type: DataTypes.VARCHAR(2),
    },
    cerca_a_area_deforestada: {
      type: DataTypes.VARCHAR(2),
    },
    dentro_de_area_deforestada: {
      type: DataTypes.VARCHAR(2),
    },
    cerca_a_carretera: {
      type: DataTypes.VARCHAR(2),
    },
    en_estrada: {
      type: DataTypes.VARCHAR(2),
    },
    campamento: {
      type: DataTypes.VARCHAR(2),
    },
    banho: {
      type: DataTypes.VARCHAR(2),
    },
    realiza_quemas: {
      type: DataTypes.VARCHAR(2),
    },
    combustible_para_transporte: {
      type: DataTypes.VARCHAR(2),
    },
    nro_celular: {
      type: DataTypes.VARCHAR(15),
    },
    observaciones: {
      type: DataTypes.VARCHAR(128),
    },
  },
  {
    timestamps: false, // updated, created values in table
  }
);

module.exports = {
  Traza,
};
