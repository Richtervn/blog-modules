/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fish', {
    id: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    level: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ''
    },
    hp: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    hpregen: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '5'
    },
    fish_type: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    fish_group: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    fish_guts: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    guts_check_time: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    wait_time: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    combat_time: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'fish'
  });
};
