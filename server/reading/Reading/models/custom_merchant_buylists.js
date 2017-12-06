/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('custom_merchant_buylists', {
    item_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    price: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    shop_id: {
      type: DataTypes.INTEGER(7).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    order: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    count: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '-1'
    },
    currentCount: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '-1'
    },
    time: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    savetimer: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'custom_merchant_buylists'
  });
};
