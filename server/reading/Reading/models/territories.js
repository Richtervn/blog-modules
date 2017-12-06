/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('territories', {
    territoryId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    castleId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    fortId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    ownedWardIds: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'territories'
  });
};
