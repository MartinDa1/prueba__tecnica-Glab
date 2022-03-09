// aqui el usuario puede acceder a unas urls donde el se puede autentificar
// /register /signup etc 
const express = require("express");
const router = express.Router();

router.get("/users/signin", (req, res) => {
    res.render("users/signin");
  });

router.get("/users/signup", (req, res) => {
    res.render("users/signup");
  });
module.exports =router;