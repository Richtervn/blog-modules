/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('custom_npcaidata', {
    npc_id: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    skill_chance: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    primary_attack: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    can_move: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    minrangeskill: {
      type: DataTypes.INTEGER(5),
      allowNull: true
    },
    minrangechance: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    maxrangeskill: {
      type: DataTypes.INTEGER(5),
      allowNull: true
    },
    maxrangechance: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    soulshot: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    spiritshot: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    spschance: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      defaultValue: '0'
    },
    sschance: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      defaultValue: '0'
    },
    ischaos: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    clan: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    clan_range: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    enemyRange: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    enemyClan: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    dodge: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    ai_type: {
      type: DataTypes.STRING(8),
      allowNull: true,
      defaultValue: 'fighter'
    }
  }, {
    tableName: 'custom_npcaidata'
  });
};
