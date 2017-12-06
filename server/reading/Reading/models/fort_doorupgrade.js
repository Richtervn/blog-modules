/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fort_doorupgrade', {
    doorId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    fortId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    hp: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    pDef: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    mDef: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'fort_doorupgrade'
  });
};
