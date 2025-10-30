// @ts-check [HKC 24 Sep 2025] Updated to defineConfig from tseslint.config

import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  // Global ignores
  {
    ignores: ['dist/'],
  },

  // Base ESLint recommended rules
  js.configs.recommended,

  // TypeScript-ESLint type-checked rules, automatically targets TS/TSX files
  ...tseslint.configs.recommendedTypeChecked,

  // React hooks plugin configuration
  reactHooks.configs['recommended-latest'],

  // Configuration for files specifically using React Refresh
  {
    plugins: {
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': 'warn',
    },
  },

  // Apply language options globally to all relevant files
  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
      },
    },
  },
]);
