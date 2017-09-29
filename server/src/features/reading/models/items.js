/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('items', {
    owner_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    object_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    item_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    count: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    enchant_level: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    loc: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    loc_data: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    time_of_use: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    custom_type1: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    custom_type2: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    mana_left: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '-1'
    },
    time: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'items'
  });
};
