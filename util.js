// import axios from "axios";
// import * as cheerio from "cheerio";

import { exec } from "child_process";

export const getWebsiteTitle =  (pageUrl) => {
  return new Promise((resolve, reject) => {
    exec(`curl ${pageUrl}`, (error, stdout, stderr) => {
      if (error) {
        console.error("curl 执行错误：", error);
        resolve('')
      }

      const pattern = /<title(?:.*)>(.*?)<\/title>/i;
      const match = stdout.match(pattern);
      const title = match ? match[1] : "";
      resolve(title)
    });
  });
};

// export const getWebsiteTitle1 = async (pageUrl) => {
//   const blackList = ["https://mbd.baidu.com/newspage/data/landingsuper"];

//   for (const i in blackList) {
//     if (pageUrl.includes(blackList[i])) return "";
//   }

//   try {
//     const response = await axios.get(pageUrl, {
//       timeout: 30000,
//     });
//     const $ = cheerio.load(response.data);
//     return $("title").text();
//   } catch (error) {
//     console.error("get title error: ", error);
//     return "";
//   }
// };
