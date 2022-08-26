'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostCategories', {
        postId: {
        allowNull: false,
        primaryKey: true,
        foreignKey: true,
        onDelete: 'CASCADE',
        type: Sequelize.INTEGER,    
        references: {
          model: 'BlogPosts',
          key: 'id'
        }
        },

        categoryId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          foreignKey: true,
          onDelete: 'CASCADE',
          references: {
            model: 'Categories',
            key: 'id'
          }
        },
      });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostCategories');
  }
};