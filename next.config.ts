import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
// GitHub Pages serves project repositories under https://<username>.github.io/<repo-name>
// If a custom domain is configured in the future, set NEXT_PUBLIC_CUSTOM_DOMAIN=true
const isCustomDomain = process.env.NEXT_PUBLIC_CUSTOM_DOMAIN === "true";
const repoName = "kusal-portfolio";
const basePath = isGithubActions && !isCustomDomain ? `/${repoName}` : "";

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
