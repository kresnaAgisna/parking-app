'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Slot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Slot.belongsTo(models.Place, {foreignKey: "PlaceId"})
      Slot.belongsTo(models.User, {foreignKey: "UserId"})
    }
  }
  Slot.init({
    day: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Day is required"
        },
        notEmpty: {
          msg: "Day is required"
        }
      }
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Duration is required"
        },
        notEmpty: {
          msg: "Duration is required"
        },
        min : {
          args: 2,
          msg: "Duration must atleast 2 hours long"
        }
      }
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Status is required"
        },
        notEmpty: {
          msg: "Status is required"
        },
        isIn : {
          args: [["booked", "confirmed", "paid", "canceled"]],
          msg: "Server doesnt recognize your input for status field"
        }
      }
    },
    totalPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Total Price is required"
        },
        notEmpty: {
          msg: "Total Price is required"
        },
        min: {
          args: 15000,
          msg: "Total must not be less than 15000"
        }
      }
    },
    start: {
      type: DataTypes.INTEGER,
    },
    end: {
      type: DataTypes.INTEGER
    },
    UserId: {
      type: DataTypes.INTEGER,
    },
    PlaceId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Slot',
  });
  return Slot;
};