'use strict';
const BlogPosts = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPost', {
  
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.STRING,
    updated: DataTypes.STRING,
  }, {
    modelName: 'BlogPosts',
    tableName: 'BlogPosts',
  });
  return BlogPosts;
};

module.exports = BlogPosts;