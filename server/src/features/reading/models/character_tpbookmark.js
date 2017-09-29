/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('character_tpbookmark', {
    charId: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      primaryKey: true
    },
    Id: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      primaryKey: true
    },
    x: {
      type: DataTypes.INTEGER(20),
      allowNull: false
    },
    y: {
      type: DataTypes.INTEGER(20),
      allowNull: false
    },
    z: {
      type: DataTypes.INTEGER(20),
      allowNull: false
    },
    icon: {
      type: DataTypes.INTEGER(20),
      allowNull: false
    },
    tag: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'character_tpbookmark'
  });
};
