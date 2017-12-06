/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('random_spawn_loc', {
    groupId: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    x: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true
    },
    y: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true
    },
    z: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true
    },
    heading: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    }
  }, {
    tableName: 'random_spawn_loc'
  });
};
