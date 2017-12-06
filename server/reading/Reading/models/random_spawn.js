/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('random_spawn', {
    groupId: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    npcId: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    count: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    initialDelay: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '-1'
    },
    respawnDelay: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '-1'
    },
    despawnDelay: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '-1'
    },
    broadcastSpawn: {
      type: DataTypes.ENUM('true','false'),
      allowNull: false,
      defaultValue: 'false'
    },
    randomSpawn: {
      type: DataTypes.ENUM('true','false'),
      allowNull: false,
      defaultValue: 'true'
    }
  }, {
    tableName: 'random_spawn'
  });
};
