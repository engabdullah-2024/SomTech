// // import type { NextConfig } from "next";

// // const nextConfig: NextConfig = {
// //   /* config options here */
// // };

// // export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     domains: [
//       'images.unsplash.com',
//       'cdn.pixabay.com',
//       'imgur.com',
//       'media.graphassets.com',
//       'encrypted-tbn0.gstatic.com', // 👈 add this!
//     ],
//   },
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'cdn.pixabay.com',
      'imgur.com',
      'media.graphassets.com',
      'encrypted-tbn0.gstatic.com',
      'randomuser.me', // ✅ Added this line
    ],
  },
};

export default nextConfig;
