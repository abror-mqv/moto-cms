'use strict';

/**
 * write-to-us router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::write-to-us.write-to-us');
