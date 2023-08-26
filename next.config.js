/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  distDir: 'build',
  images: {
    // loader: 'custom',
    // loaderFile: './public/loader.js',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'course-api.com',
        port: '',
        pathname: '/images/store/**',
      },
    ],
  },
  // async headers() {
  //   return [
  //     {
  //       headers: [
  //         {
  //           key: 'cache-control',
  //           value:
  //             'private, no-cache, no-store, max-age=54321, must-revalidate',
  //         },
  //         {
  //           key: 'connection',
  //           value: 'close',
  //         },
  //         {
  //           key: 'x-srinu54321',
  //           value: 'value 54321',
  //         },
  //       ],
  //       locale: false,
  //       source: '/_next/static/:path*',
  //     },
  //     {
  //       headers: [
  //         {
  //           key: 'cache-control',
  //           value:
  //             'private, no-cache, no-store, max-age=98765, must-revalidate',
  //         },
  //         {
  //           key: 'x-srinu-data',
  //           value: 'value data',
  //         },
  //       ],
  //       source: '/_next/data/:path*',
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
