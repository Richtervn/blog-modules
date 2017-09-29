/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auto_chat', {
    groupId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    npcId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    chatDelay: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '-1'
    }
  }, {
    tableName: 'auto_chat'
  });
};
