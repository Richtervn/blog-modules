/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('character_skills_save', {
    charId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    skill_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    skill_level: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '1',
      primaryKey: true
    },
    effect_count: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    effect_cur_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    reuse_delay: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    systime: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    restore_type: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    class_index: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    buff_index: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'character_skills_save'
  });
};
