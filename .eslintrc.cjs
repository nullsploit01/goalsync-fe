module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'unused-imports'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json'
      }
    }
  ],
  settings: {
    'import/resolver': {
      typescript: {} // this loads <rootdir>/tsconfig.json to ESLint
    }
  },
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'no-console': 'error',
    'unused-imports/no-unused-imports': 'error',
    'no-unused-vars': 'off'
  },
  ignorePatterns: ['tailwind.config.js', 'postcss.config.js', 'vite.config.ts']
}
