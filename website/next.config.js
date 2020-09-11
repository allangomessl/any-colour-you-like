const withPlugins = require('next-compose-plugins');
const transpileModules = require('next-transpile-modules')
const bundleAnalyzer = require('@next/bundle-analyzer')
const mdx = require('@next/mdx')({
  extension: /\.mdx?$/
})

module.exports = withPlugins([
  transpileModules([
    'paintbox'
  ]),
  [mdx, {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
  }]
], {
  trailingSlash: true,
})
