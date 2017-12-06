/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lvlupgain', {
    classid: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    defaulthpbase: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    defaulthpadd: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    defaulthpmod: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.37'
    },
    defaultcpbase: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    defaultcpadd: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    defaultcpmod: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.22'
    },
    defaultmpbase: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    defaultmpadd: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    defaultmpmod: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.14'
    },
    class_lvl: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'lvlupgain'
  });
};
