/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item_elementals', {
    itemId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    elemType: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '-1',
      primaryKey: true
    },
    elemValue: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '-1'
    }
  }, {
    tableName: 'item_elementals'
  });
};
