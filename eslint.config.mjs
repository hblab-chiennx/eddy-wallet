import nextConfig from "eslint-config-next";

const eslintConfig = [
  ...nextConfig,
  {
    ignores: ["design-system/**", ".next/**", "node_modules/**"],
  },
];

export default eslintConfig;
