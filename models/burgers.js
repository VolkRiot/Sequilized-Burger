module.exports = (sequelize, DataTypes) => {

  return sequelize.define('Burger', {
    burger_name: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN
    },
    date: {
      type: DataTypes.DATE
    }
  },
  {
    timestamps: false
  },{
        classMethods: {
          associate: function(models) {
            Burger.hasOne(models.Customer);
          }
        }
      });

};