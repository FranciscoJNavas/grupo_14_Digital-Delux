module.exports = (sequelize, dataTypes) => {
    let alias = 'Section';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };
    let config = {
        timestamps: false
    }
    const Section = sequelize.define(alias, cols, config); 

    Section.associate = function (models) {
        Section.hasMany(models.Product, {
            as: "products",
            foreignKey: 'section_of_site_id'
        })
    }

    return Section;
};