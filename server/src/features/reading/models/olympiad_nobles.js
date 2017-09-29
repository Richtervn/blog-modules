/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('olympiad_nobles', {
    charId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    class_id: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    olympiad_points: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    competitions_done: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    competitions_won: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    competitions_lost: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    competitions_drawn: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'olympiad_nobles'
  });
};
