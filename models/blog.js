'use strict';
module.exports = function(sequelize, DataTypes) {
  var Blog = sequelize.define('Blog', {
    body: DataTypes.STRING,
    title: DataTypes.STRING
  }, {});

  Blog.associate = function(models) {
    Blog.belongsToMany(models.Tag, {
      as: "Tags",
      through: "blog_tags",
      foreignKey: "blog_id"
    });
  };
  return Blog;
};
