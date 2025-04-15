// Simple ESLint configuration for Next.js
import nextPlugin from '@next/eslint-plugin-next';

export default [
  {
    plugins: {
      next: nextPlugin
    },
    rules: {
      ...nextPlugin.configs['core-web-vitals'].rules
    }
  }
];
