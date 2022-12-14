
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');


class Product extends Model { }

Product.init(
    {
        productName: {
            type: DataTypes.STRING,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,

        },
        productPurchasePrice: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        productSellPrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER,

        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        coverIMG: {
            type: DataTypes.STRING,
            allowNull: true,

        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "product",

    },
);
module.exports = Product;