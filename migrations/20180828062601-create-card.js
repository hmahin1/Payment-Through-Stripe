'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      source_id: {
        type: Sequelize.STRING
      },
      brand: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      exp_month: {
        type: Sequelize.INTEGER
      },
      fingerprint: {
        type: Sequelize.STRING
      },
      last4: {
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id'},
        onDelete: 'cascade',
        onUpdate: 'cascade',
        allowNull: false
      },
      customer: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Cards');
  }
};