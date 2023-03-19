module.exports = {
    overrides: [
        {
            files: ['*.ts'],
            parserOptions: {
                ecmaVersion: 'latest',
                project: ['tsconfig.eslint.json'],
                sourceType: 'module',
            },
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            rules: {
                '@typescript-eslint/type-annotation-spacing': 'error',
                '@typescript-eslint/quotes': ['error', 'backtick'],
                '@typescript-eslint/member-delimiter-style': 'error',
                '@typescript-eslint/func-call-spacing': 'error',
                '@typescript-eslint/no-useless-constructor': 'error',
                '@typescript-eslint/no-use-before-define': 'error',
                '@typescript-eslint/no-unused-vars': 'error',
                '@typescript-eslint/consistent-generic-constructors': 'error',
                '@typescript-eslint/no-confusing-non-null-assertion': 'error',
            },
        },
        {
            files: ['*.component.ts', '*.directive.ts', '**/examples/**/index.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            rules: {
                '@typescript-eslint/quotes': ['error', 'single'],
                'import/extensions': 'off',
            },
        },
    ],
};
