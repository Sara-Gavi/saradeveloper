/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // para GitHub Pages
  basePath: "/devbysara-studio",
  assetPrefix: "/devbysara-studio/", // prefijo para CSS, JS, etc.
  trailingSlash: true, //para rutas estáticas
  images: {
    unoptimized: true, // exportar imágenes locales
  },
  typescript: {
    ignoreBuildErrors: true, // evita fallos al compilar
  },
  eslint: {
    ignoreDuringBuilds: true, // evita bloqueos por lint
  },
};

export default nextConfig;
