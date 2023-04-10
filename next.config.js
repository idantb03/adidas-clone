/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const webpack = require('webpack')



module.exports = {
  webpack: (config, { dev }) => {
      config.plugins.push(
          new webpack.ProvidePlugin({
              '$': 'jquery',
              'jQuery': 'jquery',
          })
      )
      return config
  }
}