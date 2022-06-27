'use strict';

/**
 *  write-to-us controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::write-to-us.write-to-us');
