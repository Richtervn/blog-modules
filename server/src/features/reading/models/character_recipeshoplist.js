/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('character_recipeshoplist', {
    charId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    Recipeid: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    Price: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    Pos: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'character_recipeshoplist'
  });
};
