/* TypeScript 6 errors on side-effect imports it cannot resolve, and Next 15
   only ships declarations for `*.module.css`. This covers the global
   stylesheet import in app/layout.tsx. */
declare module "*.css";
