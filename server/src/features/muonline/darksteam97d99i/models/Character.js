export default (sequelize, DataTypes) => {
  return sequelize.define('Character', {
    AccountID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    cLevel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LevelUpPoint: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Class: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Experience: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Strength: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Dexterity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Vitality: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Energy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Inventory: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    MagicList: {
      type: 'VARBINARY',
      allowNull: true
    },
    Money: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Life: {
      type: 'REAL',
      allowNull: true
    },
    MaxLife: {
      type: 'REAL',
      allowNull: true
    },
    Mana: {
      type: 'REAL',
      allowNull: true
    },
    MaxMana: {
      type: 'REAL',
      allowNull: true
    },
    MapNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MapPosX: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MapPosY: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MapDir: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PkCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PkLevel: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 3
    },
    PkTime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MDate: {
      type: 'SMALLDATETIME',
      allowNull: true
    },
    LDate: {
      type: 'SMALLDATETIME',
      allowNull: true
    },
    CtlCode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DbVersion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Quest: {
      type: 'VARBINARY',
      allowNull: true
    },
    Resets: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    IsMarried: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    MarryName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    QuestNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    QuestMonsters: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    QuestInCurse: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    BanPost: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    GrandResets: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    SkyEventWins: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    IsVip: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    VipExpirationTime: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'Character',
    freezeTableName: true,
    timestamps: false
  });
};
