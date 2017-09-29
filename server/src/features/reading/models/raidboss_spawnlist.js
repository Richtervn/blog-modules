/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('raidboss_spawnlist', {
    boss_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    amount: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    loc_x: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    loc_y: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    loc_z: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    heading: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    respawn_min_delay: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '43200'
    },
    respawn_max_delay: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '129600'
    },
    respawn_time: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    currentHp: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    currentMp: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'raidboss_spawnlist'
  });
};
