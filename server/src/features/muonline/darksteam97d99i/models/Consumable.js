export default (sequelize, DataTypes) => {
  return sequelize.define(
    'CONSUMABLE',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: false
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      itemId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: true
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
      tableName: 'CONSUMABLE',
      freezeTableName: true,
      timestamps: false
    }
  );
};
