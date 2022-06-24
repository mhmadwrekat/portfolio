const siteUrl = "https://www.wrekat.com";
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
