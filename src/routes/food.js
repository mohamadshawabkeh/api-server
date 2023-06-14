const express = require('express');
const foodRouter = express.Router();
const { FoodModel } = require('../models/index');
const Collection = require('../lib/collection');

foodRouter.post("/food", createFood);
foodRouter.get("/food", getFood);
foodRouter.get("/food/:id", getOneFood);

foodRouter.put("/food/:id", updateFood);
foodRouter.delete("/food/:id", deleteFood);

async function createFood(req, res) {
    let newFood = req.body;
    let resultFood = await FoodModel.add(newFood);
    res.status(201).json(resultFood);
}

async function getFood(req, res) {
    let foodResult = await FoodModel.read();
    res.status(200).json(foodResult);
}

async function getOneFood(req, res) {
    let oneFood = req.params.id
    let foodResult = await FoodModel.read(oneFood);
    res.status(200).json(foodResult);
}

async function updateFood(req, res) {
    let foodId = parseInt(req.params.id);
    let updateFood = req.body;
    let foundFood = await FoodModel.update(updateFood,foodId);
    res.status(201).json(foundFood);
}
async function deleteFood(req, res) {
    let foodId = parseInt(req.params.id);
    let deleteFood = await FoodModel.delete(foodId);
    res.status(204).json(deleteFood);
}

module.exports = foodRouter;
