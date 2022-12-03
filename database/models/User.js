module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        first_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        avatar: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        dni: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        date_of_birth: {
            type: dataTypes.DATE,
            allowNull: false
        },
        role: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        timestamps: false
    }
    const User = sequelize.define(alias, cols, config); 

    User.associate = function (models) {
        User.belongsToMany(models.Product, {
            as: "products",
            through: 'user_product',
            foreignKey: 'user_id',
            otherKey: 'product_id',
            timestamps: false
        }),
        User.hasMany(models.Order, {
            as: "orders",
            foreignKey: "userId",
          });
    }

    return User;
};