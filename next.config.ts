import type { NextConfig } from "next";

const isCI = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isCI ? "/royal-games-ui-demo" : undefined,
  assetPrefix: isCI ? "/royal-games-ui-demo/" : undefined,
  trailingSlash: true,
};

export default nextConfig;
