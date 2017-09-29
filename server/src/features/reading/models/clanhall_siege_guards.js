/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clanhall_siege_guards', {
    clanHallId: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    npcId: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    x: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    },
    y: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    },
    z: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    },
    heading: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    },
    respawnDelay: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    isSiegeBoss: {
      type: DataTypes.ENUM('false','true'),
      allowNull: false,
      defaultValue: 'false'
    }
  }, {
    tableName: 'clanhall_siege_guards'
  });
};
