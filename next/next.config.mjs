/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.w3schools.com',
                port: '',
                pathname: '/w3css/**.png',
            },
        ],
      },
};

export default nextConfig;
