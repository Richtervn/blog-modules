/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('messages', {
    messageId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    senderId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    receiverId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    subject: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    expiration: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    reqAdena: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    hasAttachments: {
      type: DataTypes.ENUM('true','false'),
      allowNull: false,
      defaultValue: 'false'
    },
    isUnread: {
      type: DataTypes.ENUM('true','false'),
      allowNull: false,
      defaultValue: 'true'
    },
    isDeletedBySender: {
      type: DataTypes.ENUM('true','false'),
      allowNull: false,
      defaultValue: 'false'
    },
    isDeletedByReceiver: {
      type: DataTypes.ENUM('true','false'),
      allowNull: false,
      defaultValue: 'false'
    },
    isLocked: {
      type: DataTypes.ENUM('true','false'),
      allowNull: false,
      defaultValue: 'false'
    },
    isFourStars: {
      type: DataTypes.ENUM('true','false'),
      allowNull: false,
      defaultValue: 'false'
    },
    isNews: {
      type: DataTypes.ENUM('true','false'),
      allowNull: false,
      defaultValue: 'false'
    }
  }, {
    tableName: 'messages'
  });
};
