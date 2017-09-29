/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clanhall', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ''
    },
    ownerId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    lease: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ''
    },
    paidUntil: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    Grade: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0'
    },
    paid: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'clanhall'
  });
};
