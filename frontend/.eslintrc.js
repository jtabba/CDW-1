module.exports = {
    extends: [
        'standard',
        'react-app',
        'prettier',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:@typescript-eslint/eslint-recommended'
    ],
    parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        'import/named': 0,
        'no-debugger': 'off',
        'no-console': 'off',
        'no-unused-vars': 'warn',
        'react/prop-types': 'warn',
        indent: 'off'
    },
    root: true
}
