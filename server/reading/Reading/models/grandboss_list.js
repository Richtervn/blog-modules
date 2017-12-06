/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grandboss_list', {
    player_id: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      primaryKey: true
    },
    zone: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'grandboss_list'
  });
};
