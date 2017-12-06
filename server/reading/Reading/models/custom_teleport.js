/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('custom_teleport', {
    Description: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER(7).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    loc_x: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    loc_y: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    loc_z: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    fornoble: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    itemId: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '57'
    }
  }, {
    tableName: 'custom_teleport'
  });
};
