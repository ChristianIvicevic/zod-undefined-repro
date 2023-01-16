// This mixin applies some additional checks for projects using Tailwind.
module.exports = {
  plugins: [
    // Plugin documentation: https://www.npmjs.com/package/eslint-plugin-tailwindcss
    'eslint-plugin-tailwindcss'
  ],
  overrides: [
    {
      // Declare an override that applies to TypeScript files only
      files: ['*.ts', '*.tsx'],
      rules: {
        'tailwindcss/classnames-order': 'warn',
        'tailwindcss/enforces-negative-arbitrary-values': 'warn',
        'tailwindcss/enforces-shorthand': 'warn',
        'tailwindcss/migration-from-tailwind-2': 'warn',
        'tailwindcss/no-arbitrary-value': 'off',
        'tailwindcss/no-custom-classname': 'warn',
        'tailwindcss/no-contradicting-classname': 'error'
      }
    }
  ]
};
