const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("main", {
    title: 'Inicio'
  });
});

router.get("/about-me", (req, res) => {
  res.render("about-me", {
    title: 'Sobre Mí'
  });
});

module.exports = router;