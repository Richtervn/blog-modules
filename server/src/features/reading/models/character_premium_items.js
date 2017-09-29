/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('character_premium_items', {
    charId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    itemNum: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    itemId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    itemCount: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    itemSender: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'character_premium_items'
  });
};
