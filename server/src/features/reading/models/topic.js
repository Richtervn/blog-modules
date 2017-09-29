/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('topic', {
    topic_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    topic_forum_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    topic_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    topic_date: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    topic_ownername: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '0'
    },
    topic_ownerid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    topic_type: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    topic_reply: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'topic'
  });
};
