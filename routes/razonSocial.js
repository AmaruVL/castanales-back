const { Router } = require("express");
const { getPersonas} = require("../controllers/razonSocial");

const router = Router();
router.get("/", getPersonas);
module.exports = router;
