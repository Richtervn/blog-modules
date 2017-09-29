/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item_auction_bid', {
    auctionId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    playerObjId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    playerBid: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'item_auction_bid'
  });
};
