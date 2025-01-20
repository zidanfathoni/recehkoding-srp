export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        '*',
        // 'http://localhost:3000',
        // 'https://zidanfath.com', 'recehkoding.com'
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "frame-src": ["http://localhost:*", "self", "sandbox.embed.apollographql.com"],
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "*.lottiefiles.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
    }
  },
  {
    name: 'strapi::poweredBy',
    config: {
      poweredBy: 'Zidanfath'
    },
  },
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
