/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clan_wars', {
    clan1: {
      type: DataTypes.STRING(35),
      allowNull: false,
      defaultValue: ''
    },
    clan2: {
      type: DataTypes.STRING(35),
      allowNull: false,
      defaultValue: ''
    },
    wantspeace1: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    wantspeace2: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'clan_wars'
  });
};
