/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('seven_signs', {
    charId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    cabal: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ''
    },
    seal: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    red_stones: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    green_stones: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    blue_stones: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    ancient_adena_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    contribution_score: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'seven_signs'
  });
};
