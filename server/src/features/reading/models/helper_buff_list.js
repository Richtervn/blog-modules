/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('helper_buff_list', {
    id: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    skill_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    name: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: ''
    },
    skill_level: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    lower_level: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    upper_level: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    is_magic_class: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    forSummon: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    tableName: 'helper_buff_list'
  });
};
