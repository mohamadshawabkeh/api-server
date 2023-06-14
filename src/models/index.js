'use strict';
require('dotenv').config();
const { Sequelize, DataTypes } = require("sequelize");
const foodSchema = require('./food.model');
const clothes = require('./clothes.model');
const cookersSchema = require('./cooker.model');
const Collection = require('../lib/collection');

const POSTGRES_URI = process.env.NODE_ENV === "test" ? "sqlite::memory:" : process.env.DATABASE_URL;

let sequelizeOptions = process.env.NODE_ENV === "production" ?
    {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    } :
    {}

let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

const foodTable = foodSchema(sequelize,DataTypes);
const cookersTable = cookersSchema(sequelize,DataTypes);

const foodCollection = new Collection(foodTable);
const cookersCollection = new Collection(cookersTable)

cookersTable.hasMany(foodTable, {
    foreignKey: 'cookerId',
    targetKey: 'id',
})
foodTable.belongsTo(cookersTable, {
    foreignKey: 'cookerId',
    targetKey: 'id',
});

module.exports = {
    db: sequelize,
    FoodModel: foodCollection,
    CookersModel:cookersCollection,
    Clothes:clothes(sequelize, DataTypes),

}