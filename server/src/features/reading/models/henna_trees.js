/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('henna_trees', {
    class_id: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    symbol_id: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    }
  }, {
    tableName: 'henna_trees'
  });
};
