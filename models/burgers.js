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
    // your class methods, and by extension your associate method,
    // need to be in the same options object as your timestamps option.
    // sequelize.define takes 3 arguments --> sequelize.define(NAME, TABLE_STRUCTURE, OPTIONS)
    classMethods: {
      associate: function (models) {
        // Also, you hadn't defined `Burger` anywhere so the associate method was failing.

        // Also also, using the `hasOne` association will cause sequelize to create a 
        // cyclic dependency, so you wanna use `belongsTo` instead.

        Burger.belongsTo(models.Customer);
      }
    }
  });

  return Burger
};
