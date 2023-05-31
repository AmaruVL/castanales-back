const { Router } = require("express");
const { param } = require("express-validator");
const {
  getTrazaById,
  getTrazas,
  getTrazaStats,
  getTrazaStatsById,
} = require("../controllers/trazas");
const { validarCampos } = require("../middlewares/validarCampos");

const router = Router();
router.get(
  "/estadisticas/:id",
  [
    param("id", "DNI o RUC no válido").matches(/^(?:-1|[0-9]{8}([0-9]{3})?)$/),
    validarCampos,
  ],
  getTrazaStatsById
);
router.get("/", getTrazas);
router.get(
  "/:id",
  [
    param("id", "Formato de Id no válido").matches(/^[A-Z]+[-]\d+[-][A-Z]+$/),
    validarCampos,
  ],
  getTrazaById
);

module.exports = router;
