/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('noticias', {
    tipo: {
      type: DataTypes.STRING(89),
      allowNull: true,
      defaultValue: ''
    },
    autor: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    titulo: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    texto: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    data: {
      type: DataTypes.STRING(80),
      allowNull: true
    }
  }, {
    tableName: 'noticias'
  });
};
