/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // images: {
  //   remotePatterns: [new URL('https://i.pinimg.com/**')],
  // },
     images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  }
 
};

export default nextConfig;
