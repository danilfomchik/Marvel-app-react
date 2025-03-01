import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';

export default [
    js.configs.recommended,
    {
        files: ['**/*.js', '**/*.jsx'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            import: importPlugin,
            prettier,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'no-console': 'error',
            'no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    args: 'after-used',
                    ignoreRestSiblings: false,
                },
            ],
            'import/order': [
                'warn',
                {
                    groups: ['external'],
                    'newlines-between': 'always',
                },
            ],
        },
    },
];
