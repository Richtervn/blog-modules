/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('global_variables', {
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
    tableName: 'global_variables'
  });
};
