// This file contains TypeScript type declarations for non-TypeScript modules
// Here we declare the type for importing SVG files, allowing them to be used as string paths
// Without this declaration, TypeScript would show errors when importing .svg files
declare module '*.svg' {
  const content: string;
  export default content;
} 