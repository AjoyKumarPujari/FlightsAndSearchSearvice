'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports' , [
    {
      name : 'Kempegowda International Airport',
      cityId : 9,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      name : 'Mangalore International Airport',
      cityId : 9,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      name : 'Mysore Airport',
      cityId : 9,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      name: 'HAL Airport',
      cityId : 9,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      name: 'Indra Gandhi International Airport',
      cityId : 10,
      createdAt : new Date(),
      updatedAt : new Date()
    }
    ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
