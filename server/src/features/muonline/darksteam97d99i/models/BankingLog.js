export default (sequelize, DataTypes) => {
  return sequelize.define(
    'BANKING_LOG',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      memb___id: {
        type: DataTypes.STRING,
        allowNull: false
      },
      character_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      money: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      indept: {
        type: DataTypes.STRING,
        allowNull: true
      },
      indept_type: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      tableName: 'BANKING_LOG',
      freezeTableName: true,
      timestamps: true
    }
  );
};
