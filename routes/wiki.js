const express = require("express");
const router = express.Router();
const { Page } = require("../models");
const addPage = require("../views/addPage")


router.get("/", async (req, res) => {
  // const allPages = Page.findAll();
  res.send('Wiki page router works!');
});

router.post("/", async (req, res) => {
  // const title = req.params.title;
  // const content = req.params.content;
  // const status = req.params.status;

});

router.get("/add", async (req, res) => {
  // const allPages = Page.findAll();
  res.send(addPage());
});

module.exports = router;
