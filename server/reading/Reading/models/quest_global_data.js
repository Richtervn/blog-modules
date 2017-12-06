/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('quest_global_data', {
    quest_name: {
      type: DataTypes.STRING(40),
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
    tableName: 'quest_global_data'
  });
};
