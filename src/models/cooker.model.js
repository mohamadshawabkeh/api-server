'use strict';
const Cookers = (sequelize, DataTypes) =>
    sequelize.define("cookers", {
        cookersName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
    })


module.exports = Cookers;