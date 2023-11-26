/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
        pathname: "/**/**",
      },
      {
        protocol: "https",
        hostname: "icons8.com",
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
      {
        source: "/api/orexchange",
        destination:
          "https://demo.web-connect.api.yodaforex.fr/v1/products/currencies/1",
      },
      {
        source: "/api/asia",
        destination: "http://worldtimeapi.org/api/timezone/Asia/Beirut",
      },
    ];
  },
};

module.exports = nextConfig;
