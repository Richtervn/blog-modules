export default (sequelize, DataTypes) => {
  return sequelize.define(
    'WEB_SHOP_ITEM',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      package_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      slot: {
        type: DataTypes.STRING,
        allowNull: false
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      itemId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      luck: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      skill: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      option: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      exc1: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      exc2: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      exc3: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      exc4: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      exc5: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      exc6: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    },
    {
      tableName: 'WEB_SHOP_ITEM',
      freezeTableName: true,
      timestamps: false
    }
  );
};
