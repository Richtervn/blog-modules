/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('herb_droplist_groups', {
    groupId: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    itemId: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    min: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    max: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    category: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    chance: {
      type: DataTypes.INTEGER(7).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'herb_droplist_groups'
  });
};
