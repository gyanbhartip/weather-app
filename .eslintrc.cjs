module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/array-type': ['error', { default: 'generic' }],
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
    },
};
