/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clan_data', {
    clan_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    clan_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    clan_level: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    reputation_score: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    hasCastle: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ally_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ally_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    leader_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    crest_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    crest_large_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ally_crest_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    auction_bid_at: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    ally_penalty_expiry_time: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    ally_penalty_type: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    char_penalty_expiry_time: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    dissolving_expiry_time: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'clan_data'
  });
};
