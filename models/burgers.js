module.exports = (sequelize, DataTypes) => {
  const Burger = sequelize.define('Burger', {
    burger_name: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      },
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    date: {
      type: DataTypes.DATE
    }
  },
  {
    timestamps: false,
    classMethods: {
      associate: function (models) {
        Burger.belongsTo(models.Customer);
      }
    }

  });
  return Burger;
};
