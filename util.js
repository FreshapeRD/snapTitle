import axios from "axios";
import * as cheerio from "cheerio";

export const getWebsiteTitle = async (pageUrl) => {
  // 百度的新闻总是跳转百度验证
  // 百度验证目前并不是一个有验证表单的页面,
  // 写的就是 网络不给力，请稍后重试。
  // 现在百家号有时也这样。
  // 目前百度首页的新闻都走的百度的百家号等。
  const blackList = ["https://mbd.baidu.com/newspage/data/landingsuper"];

  for (const i in blackList) {
    if (pageUrl.includes(blackList[i])) return "";
  }

  try {
    const response = await axios.get(pageUrl, {
      timeout: 5000,
    });
    const $ = cheerio.load(response.data);
    return $("title").text();
  } catch (error) {
    console.error("get title error: ", error);
    return "";
  }
};
