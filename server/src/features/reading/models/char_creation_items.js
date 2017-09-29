/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('char_creation_items', {
    classId: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      primaryKey: true
    },
    itemId: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    amount: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    equipped: {
      type: DataTypes.ENUM('true','false'),
      allowNull: false,
      defaultValue: 'false'
    }
  }, {
    tableName: 'char_creation_items'
  });
};
