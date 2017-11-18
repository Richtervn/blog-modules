export default (sequelize, DataTypes) => {
  return sequelize.define(
    'WEB_SHOP_PACKAGE',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      category_id: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      is_vip_require: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      tableName: 'WEB_SHOP_PACKAGE',
      freezeTableName: true,
      timestamps: false
    }
  );
};
