/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('npc', {
    id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    idTemplate: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ''
    },
    serverSideName: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ''
    },
    serverSideTitle: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    class: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    collision_radius: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    collision_height: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    level: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    sex: {
      type: DataTypes.ENUM('etc','female','male'),
      allowNull: false,
      defaultValue: 'etc'
    },
    type: {
      type: DataTypes.STRING(22),
      allowNull: true
    },
    attackrange: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    hp: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mp: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    hpreg: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mpreg: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    str: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '40'
    },
    con: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '43'
    },
    dex: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '30'
    },
    int: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '21'
    },
    wit: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '20'
    },
    men: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '20'
    },
    exp: {
      type: DataTypes.INTEGER(9),
      allowNull: false,
      defaultValue: '0'
    },
    sp: {
      type: DataTypes.INTEGER(9),
      allowNull: false,
      defaultValue: '0'
    },
    patk: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    pdef: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    matk: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mdef: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    atkspd: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '230'
    },
    critical: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    aggro: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    matkspd: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '333'
    },
    rhand: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    lhand: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    enchant: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    walkspd: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '60.00000'
    },
    runspd: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '120.00000'
    },
    targetable: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    show_name: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    dropHerbGroup: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    basestats: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'npc'
  });
};
