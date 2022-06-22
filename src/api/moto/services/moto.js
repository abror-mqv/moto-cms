'use strict';

/**
 * moto service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::moto.moto');
