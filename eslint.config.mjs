import { defineConfig, globalIgnores } from 'eslint/config';

import js from '@eslint/js';
import tseslint from 'typescript-eslint';

import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

import prettier from 'eslint-config-prettier';

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    rules: {
      'no-console': 'warn',
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      indent: ['error', 2],
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },

  prettier,

  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);
