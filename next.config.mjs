/** @type {import('next').NextConfig} */
const nextConfig = {
    // Allows for static export
    output: 'export', 
  
    // Disable built-in image optimization
    images: {
      unoptimized: true, 
    },
  
    // Disable CSS minification to resolve your issue
    webpack(config) {
      config.optimization.minimize = false; // Disable CSS minification
      return config;
    },
  };
  
  export default nextConfig;
  