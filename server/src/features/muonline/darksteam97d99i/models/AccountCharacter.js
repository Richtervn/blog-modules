export default (sequelize, DataTypes) => {
  return sequelize.define(
    'AccountCharacter',
    {
      Number: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      Id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      GameID1: {
        type: DataTypes.STRING,
        allowNull: true
      },
      GameID2: {
        type: DataTypes.STRING,
        allowNull: true
      },
      GameID3: {
        type: DataTypes.STRING,
        allowNull: true
      },
      GameID4: {
        type: DataTypes.STRING,
        allowNull: true
      },
      GameID5: {
        type: DataTypes.STRING,
        allowNull: true
      },
      GameIDC: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      tableName: 'AccountCharacter',
      freezeTableName: true,
      timestamps: false
    }
  );
};
