const { createSecureHeaders } = require("next-secure-headers")

const securityHeaders = [
  ...createSecureHeaders({
    frameGuard: "sameorigin",
    xssProtection: "block-rendering",
    noopen: "noopen",
    nosniff: "nosniff",
    forceHTTPSRedirect:
      process.env.NODE_ENV === "production"
        ? [true, { maxAge: 60 * 60 * 24 * 360, includeSubDomains: true }]
        : false,
    referrerPolicy: "same-origin",
  }),
  {
    key: "X-Permitted-Cross-Domain-Policies",
    value: "master-only",
  },
]

const headers = async () => {
  return [
    {
      // Apply security headers to all routes
      source: "/(.*)",
      headers: securityHeaders,
    },
  ]
}
/** @type {import('prettier').Config} */
const nextConfig = {
  headers,
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
