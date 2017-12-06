/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fort', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    siegeDate: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    lastOwnedTime: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    owner: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    fortType: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    state: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    castleId: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    blood: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    supplyLvL: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'fort'
  });
};
