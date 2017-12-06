/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auction_bid', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    auctionId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    bidderId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    bidderName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    clan_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    maxBid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    time_bid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'auction_bid'
  });
};
