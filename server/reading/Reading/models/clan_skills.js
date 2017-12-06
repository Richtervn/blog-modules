/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clan_skills', {
    clan_id: {
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
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    skill_name: {
      type: DataTypes.STRING(26),
      allowNull: true
    },
    sub_pledge_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '-2',
      primaryKey: true
    }
  }, {
    tableName: 'clan_skills'
  });
};
