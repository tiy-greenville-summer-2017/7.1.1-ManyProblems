'use strict';
module.exports = function(sequelize, DataTypes) {
  var Tag = sequelize.define('Tag', {
    title: DataTypes.STRING
  }, {});

  Tag.associate = function(models) {
    Tag.belongsToMany(models.Blog, {
      as: "Blogs",
      through: "blog_tags",
      foreignKey: "tag_id"
    })
  };
  return Tag;
};
