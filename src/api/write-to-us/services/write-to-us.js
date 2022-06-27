'use strict';

/**
 * write-to-us service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::write-to-us.write-to-us');
