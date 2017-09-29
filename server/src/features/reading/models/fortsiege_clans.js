/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fortsiege_clans', {
    fort_id: {
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
    }
  }, {
    tableName: 'fortsiege_clans'
  });
};
