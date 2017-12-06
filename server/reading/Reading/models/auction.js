/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auction', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    sellerId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    sellerName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: 'NPC'
    },
    sellerClanName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    itemType: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    itemId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    itemObjectId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    itemName: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ''
    },
    itemQuantity: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    startingBid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    currentBid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    endDate: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'auction'
  });
};
