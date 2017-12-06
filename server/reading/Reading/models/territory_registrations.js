/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('territory_registrations', {
    castleId: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    registeredId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    }
  }, {
    tableName: 'territory_registrations'
  });
};
