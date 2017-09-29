/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('character_macroses', {
    charId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    icon: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    descr: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    acronym: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    commands: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    tableName: 'character_macroses'
  });
};
