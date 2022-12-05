module.exports = (sequelize, dataTypes) => {
    let alias = 'OrderItem';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        orderId: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        productId: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        quantity: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        }
    };
    let config = {
        timestamps: false
    }
    const OrderItem = sequelize.define(alias, cols, config); 

    // Brand.associate = function (models) {
    //     Brand.hasMany(models.Product, {
    //         as: "products",
    //         foreignKey: 'brand_id'
    //     })
    // }

    OrderItem.associate = function (models){
        OrderItem.belongsTo(models.Order, {
          as: "order",
          foreignKey: "orderId"
        });
    
        OrderItem.belongsTo(models.Product, {
          as: "product",
        });
      };

    return OrderItem;
};