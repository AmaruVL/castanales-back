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

module.exports = {
  formatStats,
};
