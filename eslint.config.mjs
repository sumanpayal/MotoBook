import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  { ignores: [".node_modules/*"] },
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "no-console": ["error", { allow: ["error"] }],
    }
  },
  eslintPluginPrettierRecommended,
];