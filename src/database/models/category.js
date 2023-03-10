module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    name: {
      type: DataTypes.STRING,
    },

  }, {
    tableName: 'Categories',
    timestamps: false
  });

  Category.associate = (model) => {
    Category.hasMany(model.PostCategory, {
      foreignKey: 'categoryId',
      as: 'postCategories'
    });
  }

  return Category;
}