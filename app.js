// const express = require("express");

import express from "express";
const app = express();
const port = 3000;

import { getWebsiteTitle } from "./util.js";

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.get("/snapTitle", async (req, res) => {
  const url = req.query.url;

  if (!url) return res.send("");

  const title = await getWebsiteTitle(url);
  res.send(title);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
