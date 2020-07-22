// import type { StorybookConfig } from '@storybook/core/types';
const path = require('path')
// const theme = require('./theme')

module.exports = {
  stories: ['../stories/**/*stories.@(mdx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-controls'],
  webpackFinal: async (config) => {
    config.resolve.alias['universe-ui'] = path.join( __dirname ,  '../src');
    config.resolve.alias['@side-of-the/rp'] = path.join(__dirname ,  '../src/rp');  
    return config
  }
};