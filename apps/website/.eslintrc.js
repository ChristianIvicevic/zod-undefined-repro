require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: [
    '@web-59036/eslint-config/profiles/web-app',
    '@web-59036/eslint-config/mixins/react',
    '@web-59036/eslint-config/mixins/next',
    '@web-59036/eslint-config/mixins/tailwind'
  ],
  parserOptions: { tsconfigRootDir: __dirname },
  settings: {
    react: {
      version: '18.0'
    }
  }
};
