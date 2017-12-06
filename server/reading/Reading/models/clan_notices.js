/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clan_notices', {
    clan_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    enabled: {
      type: DataTypes.ENUM('true','false'),
      allowNull: false,
      defaultValue: 'false'
    },
    notice: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'clan_notices'
  });
};
