const expressLocal = require("express");
const router= expressLocal.Router();

const ArticleController= require("../controllers/Articles")
//ruta de prueba


router.get("/ruta-prueba", ArticleController.test )
router.post("/crear", ArticleController.save )


module.exports= router
