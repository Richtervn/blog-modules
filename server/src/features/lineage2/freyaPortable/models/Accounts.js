export default (sequelize, DataTypes) => {
  return sequelize.define(
    'accounts',
    {
      login: {
        type: DataTypes.STRING(45),
        allowNull: false,
        defaultValue: '',
        primaryKey: true
      },
      password: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      lastactive: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0
      },
      accessLevel: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        defaultValue: 0
      },
      lastIP: {
        type: DataTypes.CHAR(15),
        allowNull: true
      },
      lastServer: {
        type: DataTypes.INTEGER(4),
        allowNull: true,
        defaultValue: 1
      },
      userIP: {
        type: DataTypes.CHAR(15),
        allowNull: true
      },
      pcIp: {
        type: DataTypes.CHAR(15),
        allowNull: true
      },
      hop1: {
        type: DataTypes.CHAR(15),
        allowNull: true
      },
      hop2: {
        type: DataTypes.CHAR(15),
        allowNull: true
      },
      hop3: {
        type: DataTypes.CHAR(15),
        allowNull: true
      },
      hop4: {
        type: DataTypes.CHAR(15),
        allowNull: true
      },
      email: {
        type: DataTypes.STRING(80),
        allowNull: true
      },
      nome: {
        type: DataTypes.STRING(80),
        allowNull: true
      },
      pergunta: {
        type: DataTypes.STRING(80),
        allowNull: true
      },
      resposta: {
        type: DataTypes.STRING(80),
        allowNull: true
      }
    },
    {
      tableName: 'accounts',
      freezeTableName: true,
      timestamps: false
    }
  );
};
