module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.worker\.js$/,
      loader: "worker-loader",
      // options: { inline: true }, // also works
      options: {
        name: "static/[hash].worker.js",
        publicPath: "/_next/",
      },
    });
    return config;
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  productionBrowserSourceMaps: true,
  entry: "./src/js/main.js",
  output: {
    path: __dirname + "/dist/",
    filename: "bundle.js",
    publicPath: "/",
  },
  devServer: {
    inline: false,
    contentBase: "./dist",
  },
  rewrites: async () => [
    {
      source: "/public/myfile.html",
      destination: "/pages/api/myfile.js",
    },
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"],
        },
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=9999999999, must-revalidate",
          },
        ],
      },
    ];
  },

  images: {
    minimumCacheTTL: 9999999999,
    formats: ["image/avif", "image/webp"],
  },
};
