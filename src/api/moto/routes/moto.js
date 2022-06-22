'use strict';

/**
 * moto router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::moto.moto');
