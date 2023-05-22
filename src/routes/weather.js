const { Router } = require("express");
const { cities, weather } = require("../controllers/weather");

const router = Router();

router.get("/cities/:city", cities);
router.get("/", weather);

module.exports = router;
