module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-native/all',
        'plugin:prettier/recommended'
    ],
    plugins: ['react', 'react-native', 'prettier'],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        'prettier/prettier': 'warn',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};