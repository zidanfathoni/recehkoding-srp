import tutorial from "../src/api/tutorial/controllers/tutorial";

module.exports = ({ env }) => ({
  // ...
  documentation: {
    config: {
      'x-strapi-config': {
        plugins: ['menus', 'upload', 'users-permissions'],
      },
    },
  },
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d', // Contoh: 7 hari
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
        tutorial: {
          field: 'slug',
          references: 'title',
        }
      },
    },
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
    // keep in mind that graphql playground has to be enabled HOST_URL
    enabled: process.env.NODE_ENV === "production" ? false : true,
    config: {
      endpoint: `${env('HOST_URL')}/graphql`, // OPTIONAL - endpoint has to be accessible from the browser
    }
  },
  // 'protected-populate': {
  //   enabled: true,
  //   config: {
  //     ['auto-populate']: true,
  //   },
  // },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'mail.recehkoding.com',  // Ganti dengan host SMTP Anda
        port: 465,                     // Gunakan port SMTP (587 untuk TLS)
        secure: true,                 // Gunakan true untuk port 465, selain itu false
        auth: {
          user: 'hello@recehkoding.com', // Email SMTP Anda
          pass: 'Derina@6661FA',              // Password SMTP Anda
        },
      },
      settings: {
        defaultFrom: 'hello@recehkoding.com',
        defaultReplyTo: 'hello@recehkoding.com',
      },
    },
  },
  // ...
});
