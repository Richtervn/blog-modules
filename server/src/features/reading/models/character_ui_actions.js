/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('character_ui_actions', {
    charId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    cat: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true
    },
    order: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    cmd: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    key: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    tgKey1: {
      type: DataTypes.INTEGER(8),
      allowNull: true
    },
    tgKey2: {
      type: DataTypes.INTEGER(8),
      allowNull: true
    },
    show: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    }
  }, {
    tableName: 'character_ui_actions'
  });
};
