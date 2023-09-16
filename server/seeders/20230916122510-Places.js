'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const places = require("../data/places.json")
      .map(place => {
        place.createdAt = new Date()
        place.updatedAt = new Date()
        return place
      })

    await queryInterface.bulkInsert('Places', places, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Places', null, {});
  }
};
