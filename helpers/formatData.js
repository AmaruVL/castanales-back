const formatStats = (data) => {
  // Dar mejor formato a datos de estadísticas
  return {
    totalArboles: data.total_arboles,
    totalProduccionCastanas: data.total_produccion_castanas,
    condicionArboles: {
      productivo: { si: data.productivo_si, no: data.productivo_no },
      semillero: { si: data.semillero_si, no: data.semillero_no },
    },
    detallesUbicacion: {
      cercaAAreaDeforestada: {
        si: data.cerca_a_area_deforestada_si,
        no: data.cerca_a_area_deforestada_no,
      },
      dentroAAreaDeforestada: {
        si: data.dentro_de_area_deforestada_si,
        no: data.dentro_de_area_deforestada_no,
      },
      cercaACarretera: {
        si: data.cerca_a_carretera_si,
        no: data.cerca_a_carretera_no,
      },
      enEstrada: { si: data.en_estrada_si, no: data.en_estrada_no },
    },
    condicionFitosanitaria: {
      etapaVida: {
        juvenil: data.juvenil_o_maduro_juvenil,
        maduro: data.juvenil_o_maduro_maduro,
      },
      estadoSalud: {
        sano: data.sano_o_enfermo_sano,
        enfermo: data.sano_o_enfermo_enfermo,
        muerto: data.sano_o_enfermo_muerto,
      },
      ramaCaida: { si: data.rama_caida_si, no: data.rama_caida_no },
      lianas: { si: data.lianas_si, no: data.lianas_no },
    },
  };
};

const formatTraza = (data) => {
  return {
    parcela: {
      codigoDeLaParcela: data.codigo_de_la_parcela,
      ubicacion: {
        sector: data.sector,
        distrito: data.distrito,
        provincia: data.provincia,
        departamento: data.departamento,
      },
      nombreDelAreaCastanera: data.nombre_del_area_castanera,
      nroDeContrato: data.nro_de_contrato,
    },
    comunero: {
      dniRuc: data.dni_ruc,
      edad: data.edad,
      razonSocial: data.razon_social,
      nroCelular: data.nro_celular,
    },
    arbol: {
      codigoAntiguo: data.codigo_ant,
      nombreCientifico: data.nombre_cientifico,
      nroDeArbol: data.nro_de_arbol,
      nroDeEstrada: data.nro_de_estrada,
      parametrosDasometricos: {
        dap: data.dap,
        ht: data.ht,
      },
      coordenadasUtm: {
        este: data.este,
        norte: data.norte,
      },
      condicionArbol: {
        productivo: data.productivo,
        semillero: data.semillero,
      },
      produccionLatas: data.produccion_latas,
      condicionArbol: {
        etapaVida: data.juvenil_o_maduro,
        estadoSalud: data.sano_o_enfermo,
        ramaCaida: data.rama_caida,
        lianas: data.lianas,
      },
      detallesUbicacion: {
        cercaAAreaDeforestada: data.cerca_a_area_deforestada,
        dentroDeAreaDeforestada: data.dentro_de_area_deforestada,
        cercaACarretera: data.cerca_a_carretera,
        enEstrada: data.en_estrada,
      },
    },
    informacionComplementaria: {
      campamento: data.campamento,
      banho: data.banho,
      realizaQuemas: data.realiza_quemas,
      combustibleParaTransporte: data.combustible_para_transporte,
    },
    observaciones: data.observaciones,
  };
};

module.exports = {
  formatStats,
  formatTraza,
};
