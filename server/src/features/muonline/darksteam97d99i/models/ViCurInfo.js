export default (sequelize, DataTypes) => {
  return sequelize.define(
    'VI_CURR_INFO',
    {
      ends_days: {
        type: DataTypes.STRING,
        allowNull: true
      },
      chek_code: {
        type: DataTypes.STRING,
        allowNull: false
      },
      used_time: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      memb___id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      memb_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      memb_guid: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      sno__numb: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Bill_Section: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      Bill_Value: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      Bill_Hour: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      Surplus_Point: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      Surplus_Minute: {
        type: DataTypes.DATE,
        allowNull: true
      },
      Increase_Days: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    },
    {
      tableName: 'VI_CURR_INFO',
      freezeTableName: true,
      timestamps: false
    }
  );
};
