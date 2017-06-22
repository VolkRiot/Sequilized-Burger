module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    customer_name: {
      type: DataTypes.STRING,
      validate: {
        len: [2]
      },
      allowNull: false
    },
    burger_eaten: {
      type: DataTypes.STRING,
      defaultValue: 'None'
    }
  },
    {
      timestamps: false,
      classMethods: {
        associate: function (models) {
          Customer.hasMany(models.Burger);
        }
      }
    });
  return Customer;
};
