import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
    js.configs.recommended,
    prettier,
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        ignores: ['node_modules'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        plugins: {
            prettier: eslintPluginPrettier,
        },
        rules: {
            'no-unused-vars': 'warn',
            'prettier/prettier': ['warn'],
        },
    },
];
