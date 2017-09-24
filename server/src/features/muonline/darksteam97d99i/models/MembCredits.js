export default (sequelize, DataTypes) => {
  return sequelize.define('MEMB_CREDITS', {
    memb___id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    credits: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'MEMB_CREDITS',
    freezeTableName: true,
    timestamps: false
  });
};
