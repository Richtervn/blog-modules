/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('global_tasks', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    task: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    last_activation: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    param1: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    param2: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    param3: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'global_tasks'
  });
};
