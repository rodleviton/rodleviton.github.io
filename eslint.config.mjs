import coreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

/**
 * Next 16 removed `next lint`, and eslint-config-next now ships native flat
 * config, so these are spread directly rather than wrapped in FlatCompat.
 * Running the ESLint CLI directly also means build output needs ignoring,
 * which `next lint` used to handle.
 */
const eslintConfig = [
  { ignores: [".next/**", "out/**", "node_modules/**", "next-env.d.ts"] },
  ...coreWebVitals,
  ...nextTypescript,
];

export default eslintConfig;
