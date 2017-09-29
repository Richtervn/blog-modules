/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('character_offline_trade_items', {
    charId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    item: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    count: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    price: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'character_offline_trade_items'
  });
};
