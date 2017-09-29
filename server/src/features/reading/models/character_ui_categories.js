/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('character_ui_categories', {
    charId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    catId: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true
    },
    order: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true
    },
    cmdId: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'character_ui_categories'
  });
};
