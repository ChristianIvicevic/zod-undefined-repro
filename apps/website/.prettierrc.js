const baseConfig = require('../../.prettierrc.js');
const { resolve, join } = require('path');

/** @type import('prettier').Config */
module.exports = {
  ...baseConfig,
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: resolve(join(__dirname, 'tailwind.config.cjs'))
};
