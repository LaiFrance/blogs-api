'use strict';
module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },

    categoryId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    }

  }, {
    tableName: 'PostCategories',
    timestamps: false
  });

  PostCategory.associate = (model) => {
    model.Category.belongsToMany(model.BlogPost, {
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
      as: 'blogPosts',
    });

    model.BlogPost.belongsToMany(model.Category, {
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
      as: 'categories'
    });
  }

  return PostCategory;
}