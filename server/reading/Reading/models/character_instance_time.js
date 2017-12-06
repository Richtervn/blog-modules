/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('character_instance_time', {
    charId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    instanceId: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    time: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'character_instance_time'
  });
};
