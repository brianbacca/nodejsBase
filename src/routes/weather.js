const { Router } = require("express");
const { weather, weatherByCityId } = require("../controllers/weather");

const router = Router();

router.get("/", weather);
router.get("/:city/:id", weatherByCityId);

module.exports = router;
