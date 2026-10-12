import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const isCustomDomain = process.env.NEXT_PUBLIC_CUSTOM_DOMAIN === "true";
const repoName = "kusal-portfolio";

// Base path resolution:
// - If NEXT_PUBLIC_BASE_PATH is supplied by actions/configure-pages, use it.
// - If custom domain is set, use root "".
// - Otherwise on GitHub Actions, default to "/<repo-name>".
// - In local development, defaults to "".
let basePath = "";
if (process.env.NEXT_PUBLIC_BASE_PATH !== undefined && process.env.NEXT_PUBLIC_BASE_PATH !== "") {
  basePath = process.env.NEXT_PUBLIC_BASE_PATH;
} else if (isGithubActions && !isCustomDomain) {
  basePath = `/${repoName}`;
}
if (basePath === "/") basePath = "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
