/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('olympiad_fights', {
    charOneId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    charTwoId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    charOneClass: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    charTwoClass: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    winner: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    start: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    time: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    classed: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'olympiad_fights'
  });
};
