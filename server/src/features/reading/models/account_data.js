/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('account_data', {
    account_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    var: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'account_data'
  });
};
