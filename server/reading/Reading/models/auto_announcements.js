/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auto_announcements', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    initial: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    delay: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    cycle: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    memo: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'auto_announcements'
  });
};
