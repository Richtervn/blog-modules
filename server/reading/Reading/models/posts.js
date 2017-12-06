/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('posts', {
    post_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    post_owner_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    post_ownerid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    post_date: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    post_topic_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    post_forum_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    post_txt: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'posts'
  });
};
