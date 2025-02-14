// import createNextIntlPlugin from 'next-intl/plugin';

// const withNextIntl = createNextIntlPlugin();

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default withNextIntl(nextConfig);

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: "https",
              hostname: "lh3.googleusercontent.com",
            },
          ],
    },
};

export default nextConfig;
