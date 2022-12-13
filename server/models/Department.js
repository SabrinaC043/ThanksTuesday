const { Sequelize, DataTypes, INTEGER, STRING } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');



sequelize.define('Department', {
    // model attributes are defined here 
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    coverIMG: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    productId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,

    },

    modelName: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})


module.exports = Department;