// tan solo las urls de mi servidor para que el usuario pueda crear o manejar notas sugerencias las
const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

router.get("/notes/add", (req, res) => {
  res.render("notes/new-note");
});
router.post("/notes/new-note", (req, res) => {
  console.log(req.body);
  res.send("ok");
});

router.get("/notes", (req, res) => {
  res.send("notes from database");
});

module.exports = router;
