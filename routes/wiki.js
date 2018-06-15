const express = require("express");
const router = express.Router();
const { Page } = require("../models");
const addPage = require("../views/addPage")
const main = require("../views/main")

router.get("/", async (req, res) => {
  //const allPages = await Page.findAll();
  //res.send(main(allPages));

});

router.post("/", async (req, res, next) => {

  const page = new Page({
    title: `${req.body.title}`,
    content: `${req.body.content}`
  })

  try {
    await page.save();
    res.redirect("/");
  }
  catch (err) { next(err) }

});

router.get("/add", async (req, res) => {
  // const allPages = Page.findAll();
  res.send(addPage());
});

module.exports = router;
