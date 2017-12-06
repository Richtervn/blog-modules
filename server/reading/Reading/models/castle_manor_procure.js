/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('castle_manor_procure', {
    castle_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    crop_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    can_buy: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    start_buy: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    price: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    reward_type: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    period: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1',
      primaryKey: true
    }
  }, {
    tableName: 'castle_manor_procure'
  });
};
