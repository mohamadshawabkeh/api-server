'use strict';
const Food = (sequelize, DataTypes) =>
    sequelize.define("food", {
        foodName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        foodRecipe: {
            type: DataTypes.STRING,
        },
        cookerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    })


module.exports = Food;