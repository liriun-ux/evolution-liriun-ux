import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
    async redirects() {
        return [
      {
        source: '/sitio-web',
        destination: '/web-especializada',
        permanent: true, // Esto indica que es un 301, vital para el SEO
      },
    ];
  },
};

export default nextConfig;
