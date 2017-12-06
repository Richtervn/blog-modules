/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auto_chat_text', {
    groupId: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    chatText: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    }
  }, {
    tableName: 'auto_chat_text'
  });
};
