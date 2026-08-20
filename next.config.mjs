/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      /* The dense table used to live at /register. The concept keeps that
         name in the copy; the URL says the plain thing. */
      { source: "/register", destination: "/work", permanent: true },

      /* Overview was folded into the home page. Old links still land on the
         work, rather than on a 404. */
      { source: "/overview", destination: "/#selected-work", permanent: true },
    ];
  },
};

export default nextConfig;
