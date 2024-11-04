/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Allows for static export
    images: {
        unoptimized: true, // Disable built-in image optimization
    },
};

export default nextConfig;
