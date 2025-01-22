/**
 * tutorial controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::tutorial.tutorial', ({ strapi }) => ({
  async findOne(ctx) {
    try {

      const { slug } = ctx.params; // Mendapatkan Slug dari parameter
      const tutorials = await strapi.entityService.findOne('api::tutorial.tutorial', slug, {
        populate: [
          'thumbnail',
          'users_permissions_users.avatar',
          'stacks.icons_svg',
          'task.users_permissions_users',
          'portfolios.thumbnail',
        ], // Opsional: untuk memuat relasi user
      });
    } catch (err) {
      strapi.log.error('Error fetching tutorials:', err);
      return ctx.internalServerError('An error occurred while fetching the tutorials');
    }
  }


}));