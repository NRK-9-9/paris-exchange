/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
        pathname: "/**/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/countryexchange",
        destination:
          "https://demo.web-connect.api.yodaforex.fr/v1/products/currencies",
      },
    ];
  },
};

module.exports = nextConfig;
