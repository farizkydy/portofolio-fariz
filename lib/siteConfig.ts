// Single source of truth for `basePath`. Must match the value set in next.config.ts.
//
// `next/image` does NOT prepend `basePath` to a string `src` automatically
// (see the Next.js basePath docs), and this project uses `output: "export"`,
// so any component that builds a public asset URL must prepend it manually.
export const basePath = "/portofolio-fariz";
