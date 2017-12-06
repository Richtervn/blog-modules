/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('castle_functions', {
    castle_id: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    type: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    lvl: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    lease: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    rate: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    endTime: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'castle_functions'
  });
};
