/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('connection_test_table', {
    a: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    tableName: 'connection_test_table'
  });
};
