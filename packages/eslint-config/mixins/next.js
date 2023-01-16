// This mixin applies some additional checks for projects using Next.js.
module.exports = {
  plugins: [
    // Plugin documentation: https://nextjs.org/docs/basic-features/eslint#eslint-plugin
    '@next/eslint-plugin-next'
  ],
  settings: {
    next: {
      rootDir: ['apps/*/']
    }
  },
  overrides: [
    {
      // Declare an override that applies to TypeScript files only
      files: ['*.ts', '*.tsx'],
      rules: {
        'jsx-a11y/alt-text': [
          'warn',
          {
            elements: ['img'],
            img: ['Image']
          }
        ],
        'import/no-anonymous-default-export': 'warn',
        '@next/next/google-font-display': 'warn',
        '@next/next/google-font-preconnect': 'warn',
        '@next/next/next-script-for-ga': 'warn',
        '@next/next/no-before-interactive-script-outside-document': 'warn',
        '@next/next/no-css-tags': 'warn',
        '@next/next/no-head-element': 'warn',
        '@next/next/no-img-element': 'warn',
        '@next/next/no-page-custom-font': 'warn',
        '@next/next/no-styled-jsx-in-document': 'warn',
        '@next/next/no-title-in-document-head': 'warn',
        '@next/next/no-typos': 'warn',
        '@next/next/no-unwanted-polyfillio': 'warn',
        '@next/next/inline-script-id': 'error',
        '@next/next/no-assign-module-variable': 'error',
        '@next/next/no-document-import-in-page': 'error',
        '@next/next/no-duplicate-head': 'error',
        '@next/next/no-head-import-in-document': 'error',
        '@next/next/no-script-component-in-head': 'error',
        '@next/next/no-html-link-for-pages': 'error',
        '@next/next/no-sync-scripts': 'error'
      }
    }
  ]
};
