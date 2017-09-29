/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('access_levels', {
    accessLevel: {
      type: DataTypes.INTEGER(9),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    nameColor: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      defaultValue: 'FFFFFF'
    },
    titleColor: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      defaultValue: 'FFFFFF'
    },
    childAccess: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    isGm: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    allowPeaceAttack: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    allowFixedRes: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    allowTransaction: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    allowAltg: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    giveDamage: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    takeAggro: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    gainExp: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'access_levels'
  });
};
