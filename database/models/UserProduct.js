module.exports = (sequelize, dataTypes) => {
    let alias = 'UserProduct';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        user_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        product_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        buyer_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
        }
    };
    let config = {
        tableName: 'user_product',
        timestamps: false
    }
    const UserProduct = sequelize.define(alias, cols, config); 

    // UserProduct.associate = function (models) {
    //     UserProduct.hasMany(models.User, {
    //         as: "users",
    //         foreignKey: 'user_id'
    //     })

    //     UserProduct.hasMany(models.Product, {
    //         as: "products",
    //         foreignKey: 'product_id'
    //     })
    // }

    return UserProduct;
};