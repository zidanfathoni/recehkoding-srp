module.exports = ({ env }) => ({
  // ...
  documentation: {
    config: {
      'x-strapi-config': {
        plugins: ['menus', 'upload', 'users-permissions'],
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
  // ...
});
