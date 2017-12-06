/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admin_command_access_rights', {
    adminCommand: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: 'admin_',
      primaryKey: true
    },
    accessLevels: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '1'
    },
    confirmDlg: {
      type: DataTypes.ENUM('true','false'),
      allowNull: false,
      defaultValue: 'false'
    }
  }, {
    tableName: 'admin_command_access_rights'
  });
};
