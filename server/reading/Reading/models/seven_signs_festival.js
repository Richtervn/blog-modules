/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('seven_signs_festival', {
    festivalId: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    cabal: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    cycle: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    date: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    score: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    members: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'seven_signs_festival'
  });
};
