/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auction_watch', {
    charObjId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    auctionId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    }
  }, {
    tableName: 'auction_watch'
  });
};
