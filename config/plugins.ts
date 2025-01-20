module.exports = ({ env }) => ({
  // ...
  documentation: {
    config: {
      'x-strapi-config': {
        plugins: ['menus'],
      },
    },
  },
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        article: {
          field: 'slug',
          references: 'title',
        },
      },
    },
  },
  "strapi-plugin-lottie": {
    enabled: true
  },
  "graphql": {
    enabled: true,
    config: {
      // set this to true if you want to enable the playground in production
      playgroundAlways: false,
    },
  },
  "apollo-sandbox": {
    // enables the plugin only in development mode
    // if you also want to use it in production, set this to true
    // keep in mind that graphql playground has to be enabled
    enabled: process.env.NODE_ENV === "production" ? false : true,
    config: {
      endpoint: "http://localhost:1337/graphql", // OPTIONAL - endpoint has to be accessible from the browser
    }
  },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'gmail.googleapis.com', // Ganti dengan host SMTP Anda
        port: 587,               // Gunakan port SMTP (587 untuk TLS)
        secure: false,           // Gunakan true untuk port 465, selain itu false
        auth: {
          user: 'recehkoding@gmail.com', // Email SMTP Anda
          clientId: '127546448959-l2inpe2i22oo0vnn3r9fc24s53v5m8rl.apps.googleusercontent.com',
          clientSecret: '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',
        },
      },
      settings: {
        defaultFrom: 'recehkoding@gmail.com',
        defaultReplyTo: 'recehkoding@gmail.com',
      },
    },
  },
  // ...
});
