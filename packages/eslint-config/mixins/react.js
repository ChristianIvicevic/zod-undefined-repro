// This mixin applies some additional checks for projects using the React library.
module.exports = {
  plugins: [
    // Plugin documentation: https://www.npmjs.com/package/eslint-plugin-react
    'eslint-plugin-react',
    // Plugin documentation: https://www.npmjs.com/package/eslint-plugin-react-hooks
    'eslint-plugin-react-hooks',
    // Plugin documentation: https://www.npmjs.com/package/eslint-plugin-jsx-a11y
    'eslint-plugin-jsx-a11y'
  ],
  settings: {
    react: {
      // The default value is "detect". Automatic detection works by loading the entire React library into the linter's
      // process, which is inefficient.  It is recommended to specify the version explicity.
      version: 'detect'
    }
  },
  parserOptions: {
    ecmaFeatures: { jsx: true }
  },
  overrides: [
    {
      // Declare an override that applies to TypeScript files only
      files: ['*.ts', '*.tsx'],
      rules: {
        // RATIONALE:         Unifies function components to be written as arrow functions.
        'react/function-component-definition': [
          'warn',
          {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function'
          }
        ],
        'react/jsx-curly-brace-presence': ['warn', 'never'],
        // RATIONALE:         When React components are added to an array, they generally need a "key".
        'react/jsx-key': 'warn',
        // RATIONALE:         Catches a common coding mistake.
        'react/jsx-no-comment-textnodes': 'warn',
        // RATIONALE:         Catches a common coding mistake.
        'react/jsx-no-duplicate-props': 'warn',
        // RATIONALE:         Security risk.
        'react/jsx-no-target-blank': 'warn',
        // RATIONALE:         Fixes the no-unused-vars rule to make it compatible with React
        'react/jsx-uses-react': 'warn',
        // RATIONALE:         Fixes the no-unused-vars rule to make it compatible with React
        'react/jsx-uses-vars': 'warn',
        // RATIONALE:         Catches a common coding mistake.
        'react/no-children-prop': 'warn',
        // RATIONALE:         Catches a common coding mistake.
        'react/no-danger-with-children': 'warn',
        // RATIONALE:         Avoids usage of deprecated APIs.
        //
        // Note that the set of deprecated APIs is determined by the "react.version" setting.
        'react/no-deprecated': 'warn',
        // RATIONALE:         Catches a common coding mistake.
        'react/no-direct-mutation-state': 'warn',
        // RATIONALE:         Catches some common coding mistakes.
        'react/no-unescaped-entities': 'warn',
        // RATIONALE:         Avoids a potential performance problem.
        'react/no-find-dom-node': 'warn',
        // RATIONALE:         Deprecated API.
        'react/no-is-mounted': 'warn',
        // RATIONALE:         Deprecated API.
        'react/no-render-return-value': 'warn',
        // RATIONALE:         Deprecated API.
        'react/no-string-refs': 'warn',
        // RATIONALE:         Improves syntax for some cases that are not already handled by Prettier.
        'react/self-closing-comp': 'warn',
        // RATIONALE:         Catches some common coding mistakes.
        'react-hooks/exhaustive-deps': 'warn',
        // RATIONALE:         Catches some common coding mistakes.
        'react-hooks/rules-of-hooks': 'warn',
        'jsx-a11y/alt-text': 'warn',
        'jsx-a11y/anchor-has-content': 'warn',
        'jsx-a11y/anchor-is-valid': 'warn',
        'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
        'jsx-a11y/aria-props': 'warn',
        'jsx-a11y/aria-proptypes': 'warn',
        'jsx-a11y/aria-role': 'warn',
        'jsx-a11y/aria-unsupported-elements': 'warn',
        'jsx-a11y/autocomplete-valid': 'warn',
        'jsx-a11y/click-events-have-key-events': 'warn',
        'jsx-a11y/heading-has-content': 'warn',
        'jsx-a11y/html-has-lang': 'warn',
        'jsx-a11y/iframe-has-title': 'warn',
        'jsx-a11y/img-redundant-alt': 'warn',
        'jsx-a11y/interactive-supports-focus': [
          'warn',
          {
            tabbable: ['button', 'checkbox', 'link', 'searchbox', 'spinbutton', 'switch', 'textbox']
          }
        ],
        'jsx-a11y/label-has-associated-control': 'warn',
        'jsx-a11y/media-has-caption': 'warn',
        'jsx-a11y/mouse-events-have-key-events': 'warn',
        'jsx-a11y/no-access-key': 'warn',
        'jsx-a11y/no-autofocus': 'warn',
        'jsx-a11y/no-distracting-elements': 'warn',
        'jsx-a11y/no-interactive-element-to-noninteractive-role': [
          'warn',
          {
            tr: ['none', 'presentation'],
            canvas: ['img']
          }
        ],
        'jsx-a11y/no-noninteractive-element-interactions': [
          'warn',
          {
            handlers: [
              'onClick',
              'onError',
              'onLoad',
              'onMouseDown',
              'onMouseUp',
              'onKeyPress',
              'onKeyDown',
              'onKeyUp'
            ],
            alert: ['onKeyUp', 'onKeyDown', 'onKeyPress'],
            body: ['onError', 'onLoad'],
            dialog: ['onKeyUp', 'onKeyDown', 'onKeyPress'],
            iframe: ['onError', 'onLoad'],
            img: ['onError', 'onLoad']
          }
        ],
        'jsx-a11y/no-noninteractive-element-to-interactive-role': [
          'warn',
          {
            ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
            ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
            li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
            table: ['grid'],
            td: ['gridcell'],
            fieldset: ['radiogroup', 'presentation']
          }
        ],
        'jsx-a11y/no-noninteractive-tabindex': [
          'warn',
          {
            tags: [],
            roles: ['tabpanel'],
            allowExpressionValues: true
          }
        ],
        'jsx-a11y/no-redundant-roles': 'warn',
        'jsx-a11y/no-static-element-interactions': [
          'warn',
          {
            allowExpressionValues: true,
            handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp']
          }
        ],
        'jsx-a11y/role-has-required-aria-props': 'warn',
        'jsx-a11y/role-supports-aria-props': 'warn',
        'jsx-a11y/scope': 'warn',
        'jsx-a11y/tabindex-no-positive': 'warn'
      }
    }
  ]
};
