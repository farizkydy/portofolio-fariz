import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import { basePath } from "./lib/siteConfig";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    unoptimized: true,
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
