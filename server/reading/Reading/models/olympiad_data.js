/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('olympiad_data', {
    id: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    current_cycle: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    period: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    olympiad_end: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    validation_end: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    next_weekly_change: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'olympiad_data'
  });
};
