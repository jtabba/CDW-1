module.exports = {
    extends: [
        'standard',
        'prettier',
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: false
        }
    },
    env: {
        browser: false,
        node: true,
        es6: true,
        jest: true
    },
    rules: {
        'no-debugger': 'off',
        'no-console': 'off',
        indent: 'off'
    },
    root: true
}
