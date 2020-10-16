module.exports = {
    root: true,

    env: {
        node: true
    },

    'extends': [
      'plugin:vue/essential',
      '@vue/standard',
      'eslint:recommended'
    ],

    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        indent: 0,
        'no-tabs': 0,
        'eol-last': 0,
        'func-call-spacing': 0
    },

    parserOptions: {
        parser: 'babel-eslint'
    },

    overrides: [
      {
        files: [
          '**/__tests__/*.{j,t}s?(x)',
          '**/tests/unit/**/*.spec.{j,t}s?(x)'
        ],
        env: {
          mocha: true
        }
      }
    ]
}
