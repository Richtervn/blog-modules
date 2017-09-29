/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('forums', {
    forum_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    forum_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    forum_parent: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    forum_post: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    forum_type: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    forum_perm: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    forum_owner_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'forums'
  });
};
