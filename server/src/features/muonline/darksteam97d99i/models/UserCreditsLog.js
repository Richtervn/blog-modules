export default (sequelize, DataTypes) => {
  return sequelize.define(
    'USER_CREDITS_LOG',
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
      credits: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      }
    },
    {
      tableName: 'USER_CREDITS_LOG',
      freezeTableName: true,
      timestamps: true
    }
  );
};
