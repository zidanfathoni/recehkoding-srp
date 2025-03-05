// ticket controller

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::ticket.ticket', ({ strapi }) => ({
  // async find(ctx) {
  //   const { user } = ctx.state; // Mendapatkan user dari JWT
  //   if (!user) {
  //     return ctx.unauthorized('You must be logged in to access this resource');
  //   }

  //   // Filter data berdasarkan userId
  //   const userId = user.id;

  //   const tickets = await strapi.entityService.findMany('api::ticket.ticket', {
  //     filters: { users_permissions_user: userId },
  //     // populate: ['users_permissions_user'], // Opsional: untuk memuat relasi user
  //   });

  //   return tickets;
  // },


  // async find(ctx) {
  //   try {
  //     const tickets = await strapi.entityService.findMany('api::ticket.ticket', {
  //       // populate: ['users_permissions_user'], // Opsional: untuk memuat relasi user
  //     });

  //     return tickets;
  //   } catch (err) {
  //     strapi.log.error('Error fetching ticket:', err);
  //     return ctx.internalServerError('An error occurred while fetching the ticket');
  //   }
  // }


}));
