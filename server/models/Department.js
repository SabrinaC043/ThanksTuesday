const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');


class Department extends Model { }


Department.init(
    {
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
        coverIMG: {
            type: DataTypes.STRING,
            allowNull: false,

        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "Department",
    },
);


module.exports = Department;