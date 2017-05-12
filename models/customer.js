module.exports = (sequelize, DataTypes) => {

  return sequelize.define('Customer', {
    customer_name: {
      type: DataTypes.STRING,
      validate: {
        len: [2]
      },
      allowNull: false
    },
  },{
    timestamps: false
  },{
    classMethods: {
      associate: function(models){
        Customer.hasMany(models.Burger)
      }
    }
  })

};
