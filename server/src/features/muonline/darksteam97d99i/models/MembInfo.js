export default (sequelize, DataTypes) => {
  return sequelize.define('MEMB_INFO', {
    memb_guid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false
    },
    memb___id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    memb__pwd: {
      type: DataTypes.STRING,
      allowNull: false
    },
    memb_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sno__numb: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    addr_info: {
      type: DataTypes.STRING,
      allowNull: true
    },
    addr_deta: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tel__numb: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phon_numb: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mail_addr: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fpas_ques: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fpas_answ: {
      type: DataTypes.STRING,
      allowNull: true
    },
    job__code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    appl_days: {
      type: 'SMALLDATETIME',
      allowNull: true
    },
    modi_days: {
      type: 'SMALLDATETIME',
      allowNull: true
    },
    out__days: {
      type: 'SMALLDATETIME',
      allowNull: true
    },
    true_days: {
      type: 'SMALLDATETIME',
      allowNull: true
    },
    mail_chek: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bloc_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ctl1_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    IsVip: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    VipExpirationTime: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'MEMB_INFO',
    timestamps: false,
    freezeTableName: true
  });
};
