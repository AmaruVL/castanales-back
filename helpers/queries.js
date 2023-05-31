const getQueryStats = (dniRuc = "-1") => {
  // dniRuc -1 significa seleccionar todos
  const query = `
  SELECT
    COUNT(*) AS total_arboles,
    SUM(produccion_latas) AS total_produccion_castanas,
    COUNT(CASE WHEN productivo = 'Si' THEN 1 END) AS productivo_si,
    COUNT(CASE WHEN productivo = 'No' THEN 1 END) AS productivo_no,
    COUNT(CASE WHEN semillero = 'Si' THEN 1 END) AS semillero_si,
    COUNT(CASE WHEN semillero = 'No' THEN 1 END) AS semillero_no,
    COUNT(CASE WHEN cerca_a_area_deforestada = 'Si' THEN 1 END) AS cerca_a_area_deforestada_si,
    COUNT(CASE WHEN cerca_a_area_deforestada = 'No' THEN 1 END) AS cerca_a_area_deforestada_no,
    COUNT(CASE WHEN dentro_de_area_deforestada = 'Si' THEN 1 END) AS dentro_de_area_deforestada_si,
    COUNT(CASE WHEN dentro_de_area_deforestada = 'No' THEN 1 END) AS dentro_de_area_deforestada_no,
    COUNT(CASE WHEN cerca_a_carretera = 'Si' THEN 1 END) AS cerca_a_carretera_si,
    COUNT(CASE WHEN cerca_a_carretera = 'No' THEN 1 END) AS cerca_a_carretera_no,
    COUNT(CASE WHEN en_estrada = 'Si' THEN 1 END) AS en_estrada_si,
    COUNT(CASE WHEN en_estrada = 'No' THEN 1 END) AS en_estrada_no,
    COUNT(CASE WHEN juvenil_o_maduro = 'Juvenil' THEN 1 END) AS juvenil_o_maduro_juvenil,
    COUNT(CASE WHEN juvenil_o_maduro = 'Maduro' THEN 1 END) AS juvenil_o_maduro_maduro,
    COUNT(CASE WHEN sano_o_enfermo = 'Sano' THEN 1 END) AS sano_o_enfermo_sano,
    COUNT(CASE WHEN sano_o_enfermo = 'Enfermo' THEN 1 END) AS sano_o_enfermo_enfermo,
    COUNT(CASE WHEN sano_o_enfermo = 'Muerto' THEN 1 END) AS sano_o_enfermo_muerto,
    COUNT(CASE WHEN rama_caida = 'Si' THEN 1 END) AS rama_caida_si,
    COUNT(CASE WHEN rama_caida = 'No' THEN 1 END) AS rama_caida_no,
    COUNT(CASE WHEN lianas = 'Si' THEN 1 END) AS lianas_si,
    COUNT(CASE WHEN lianas = 'No' THEN 1 END) AS lianas_no	   
  FROM trazas
  WHERE dni_ruc = ${dniRuc === "-1" ? "dni_ruc" : `'${dniRuc}'`}`;
  return query;
};

module.exports = {
  getQueryStats,
};
