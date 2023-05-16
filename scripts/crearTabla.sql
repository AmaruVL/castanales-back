create table traza(
  codigo_ant varchar(15) primary key,
  codigo_de_la_parcela varchar(10),
  razon_social varchar(64),
  dni_ruc varchar(11),
  edad int,
  sector varchar(45),
  distrito varchar(45),
  provincia varchar(45),
  departamento varchar(45),
  nombre_del_area_castanera varchar(45),
  nro_de_contrato varchar(45),
  nombre_cientifico varchar(45),
  nro_de_arbol int,
  nro_de_estrada int,
  dap	numeric(6,2),
  ht numeric(6,2),
  este varchar(15),
  norte varchar(15),
  productivo varchar(2),
  semillero varchar(2),
  produccion_latas numeric(6,2),
  juvenil_o_maduro varchar(15),
  sano_o_enfermo varchar(15),
  rama_caida varchar(2),
  lianas varchar(2),
  cerca_a_area_deforestada varchar(2),
  dentro_de_area_deforestada varchar(2),
  cerca_a_carretera varchar(2),
  en_estrada varchar(2),
  campamento varchar(2),
  banho varchar(2),
  realiza_quemas varchar(2),
  combustible_para_transporte varchar(2),
  nro_celular varchar(15),
  observaciones varchar(128)
);

select  * 
-- delete 
from traza