/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('character_subclasses', {
    charId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    class_id: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    exp: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    sp: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    level: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '40'
    },
    class_index: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'character_subclasses'
  });
};
