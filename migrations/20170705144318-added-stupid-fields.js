'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'blog_tags',
      'createdAt',
      {type: Sequelize.DATE}
    );
    queryInterface.addColumn(
      'blog_tags',
      'updatedAt',
      {type: Sequelize.DATE}
    );
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn(
      "blog_tags",
      "createdAt"
    );

    queryInterface.removeColumn(
      "blog_tags",
      "updatedAt"
    );
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
