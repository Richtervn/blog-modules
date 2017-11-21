export default (sequelize, DataTypes) => {
  return sequelize.define('BANKING', {
    memb___id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    zen_balance: {
      type: DataTypes.STRING,
      allowNull: true
    },
    loan_money: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'BANKING',
    freezeTableName: true,
    timestamps: false
  });
};
