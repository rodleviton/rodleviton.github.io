import { execSync } from "node:child_process";
import type { NextConfig } from "next";

/**
 * Resolved once at build time so the footer can report which commit produced
 * the deployed output. Falls back to "dev" outside a git checkout.
 */
function resolveBuildSha() {
  try {
    return execSync("git rev-parse --short HEAD").toString().trim();
  } catch {
    return "dev";
  }
}

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BUILD_SHA: resolveBuildSha(),
  },
};

export default nextConfig;
