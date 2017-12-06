/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item_auction', {
    auctionId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    instanceId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    auctionItemId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    startingTime: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    endingTime: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    auctionStateId: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'item_auction'
  });
};
