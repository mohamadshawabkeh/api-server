'use strict';
const Clothes = (sequelize, DataTypes) =>
    sequelize.define("clothes", {
        clothesModel: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        clothesSize: {
            type: DataTypes.STRING,
        }
    })


module.exports = Clothes;