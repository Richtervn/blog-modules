export default (sequelize, DataTypes) => {
	return sequelize.define(
		'USER_RECEIPT',
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
			receipt_id: {
				type: DataTypes.INTEGER,
				allowNull: true
			}
		},
		{
			tableName: 'USER_RECEIPT',
			freezeTableName: true,
			timestamps: false
		}
	);
};
