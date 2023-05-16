const { Router } = require("express");
const { param } = require("express-validator");
const { getTrazaById, getTrazas } = require("../controllers/trazas");
const { validarCampos } = require("../middlewares/validarCampos");

const router = Router();
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
