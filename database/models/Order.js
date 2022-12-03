module.exports = (sequelize, dataTypes) => {
    let alias = 'Order';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        userId: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        total: {
            type: dataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        paymentMethod: {
            type: dataTypes.STRING(25),
            allowNull: false
        },
        shippingMethod: {
            type: dataTypes.STRING(25),
            allowNull: false
        }
    };
    let config = {
        timestamps: false
    }
    const Order = sequelize.define(alias, cols, config); 

    Order.associate = function (models) {
        Order.belongsTo(models.User, {
          as: "user",
          foreignKey: "userId",
        });
        Order.hasMany(models.OrderItem, {
          as: "orderItems",
          foreignKey: "orderId"
        });
      };

    return Order;
};