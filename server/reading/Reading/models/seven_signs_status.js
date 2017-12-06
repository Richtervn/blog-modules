/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('seven_signs_status', {
    id: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    current_cycle: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '1'
    },
    festival_cycle: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '1'
    },
    active_period: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '1'
    },
    date: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    previous_winner: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    dawn_stone_score: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    dawn_festival_score: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    dusk_stone_score: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    dusk_festival_score: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    avarice_owner: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    gnosis_owner: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    strife_owner: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    avarice_dawn_score: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    gnosis_dawn_score: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    strife_dawn_score: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    avarice_dusk_score: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    gnosis_dusk_score: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    strife_dusk_score: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    accumulated_bonus0: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    accumulated_bonus1: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    accumulated_bonus2: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    accumulated_bonus3: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    accumulated_bonus4: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'seven_signs_status'
  });
};
