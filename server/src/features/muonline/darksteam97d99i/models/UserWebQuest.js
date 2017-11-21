export default (sequelize, DataTypes) => {
  return sequelize.define(
    'USER_WEB_QUEST',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      memb___id: {
        type: DataTypes.STRING,
        allowNull: true
      },
      character_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      quest_id: {
        type: DataTypes.STRING,
        allowNull: false
      },
      finish_times: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true
      },
      checkpoint: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      progress: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      tableName: 'USER_WEB_QUEST',
      freezeTableName: true,
      timestamps: false
    }
  );
};
