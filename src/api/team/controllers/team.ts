/**
 * team controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::team.team', ({ strapi }) => ({
  async findOne(ctx) {
    try {

      const { id } = ctx.params; // Mendapatkan UUID dari parameter
      const teams = await strapi.entityService.findOne('api::team.team', id, {
        populate: [
          'thumbnail',
          'users_permissions_users.avatar',
          'stacks.icons_svg',
          'task.users_permissions_users',
          'portfolios.thumbnail',
        ], // Opsional: untuk memuat relasi user
      });
      var data = {
        'data': teams
      }

      return data;
    } catch (err) {
      strapi.log.error('Error fetching teams:', err);
      return ctx.internalServerError('An error occurred while fetching the teams');
    }
  }


}));