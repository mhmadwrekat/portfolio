const siteUrl = "https://wrekat.vercel.app";
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: "/404",
      },
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
