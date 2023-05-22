import express from "express";
const app = express();
const port = 13128;

import { getWebsiteTitle } from "./util.js";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/snapTitle", async (req, res) => {
  try {
    let url = req._parsedUrl.search.split("?url=")[1];
    url=decodeURIComponent(url)
    // console.log(111, url);

    if (!url) return res.send("");

    const title = await getWebsiteTitle(url);
    res.send(title);
    console.log('send ok ',url,title)
  } catch (error) {
    console.error('app.js error: ',error)
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
