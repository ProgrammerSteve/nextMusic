/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    config.module.rules.push(
      {
        test: /\.(mp3)$/,
        use: {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/music/",
            outputPath: "static/music/",
            name: "[name].[ext]",
            esModule: false,
          },
        },
      },
      {
        test: /\.(pdf)$/,
        use: {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/pdfs/",
            outputPath: "static/pdfs/",
            name: "[name].[ext]",
            esModule: false,
          },
        },
      }
    );
    return config;
  },
};

module.exports = nextConfig;
