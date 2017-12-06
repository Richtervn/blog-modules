/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('itemsonground', {
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
    x: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    y: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    z: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    drop_time: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    equipable: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'itemsonground'
  });
};
