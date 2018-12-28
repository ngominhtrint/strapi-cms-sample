'use strict';

/**
 * Article.js controller
 *
 * @description: A set of functions called "actions" for managing `Article`.
 */

module.exports = {

  /**
   * Retrieve article records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.article.search(ctx.query);
    } else {
      return strapi.services.article.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a article record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.article.fetch(ctx.params);
  },

  /**
   * Count article records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.article.count(ctx.query);
  },

  /**
   * Create a/an article record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.article.add(ctx.request.body);
  },

  /**
   * Update a/an article record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.article.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an article record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.article.remove(ctx.params);
  },

  /**
   * Add relation to a/an article record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.article.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an article record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.article.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an article record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.article.removeRelation(ctx.params, ctx.request.body);
  }
};
