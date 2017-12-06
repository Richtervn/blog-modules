/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('castle_manor_production', {
    castle_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    seed_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    can_produce: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    start_produce: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    seed_price: {
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
    tableName: 'castle_manor_production'
  });
};
