// aqui van las urls de mi pagina principal -aplicacion principal
// ejemplo /about
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
    res.render("about");
  });
  

module.exports = router;
