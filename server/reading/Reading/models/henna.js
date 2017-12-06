/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('henna', {
    symbol_id: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    symbol_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    dye_id: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: true
    },
    dye_amount: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    stat_INT: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    stat_STR: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    stat_CON: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    stat_MEM: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    stat_DEX: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    stat_WIT: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'henna'
  });
};
