/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('airships', {
    owner_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    fuel: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '600'
    }
  }, {
    tableName: 'airships'
  });
};
