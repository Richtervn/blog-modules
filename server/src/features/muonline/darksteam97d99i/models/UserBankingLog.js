export default (sequelize, DataTypes) => {
  return sequelize.define(
    'USER_BANKING_LOG',
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
      }
    },
    {
      tableName: 'USER_BANKING_LOG',
      freezeTableName: true,
      timestamps: false
    }
  );
};
