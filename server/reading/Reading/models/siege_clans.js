/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('siege_clans', {
    castle_id: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    clan_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    type: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    castle_owner: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'siege_clans'
  });
};
