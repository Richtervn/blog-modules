/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item_attributes', {
    itemId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    augAttributes: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '-1'
    },
    augSkillId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '-1'
    },
    augSkillLevel: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '-1'
    }
  }, {
    tableName: 'item_attributes'
  });
};
