const express = require('express');
const foodRouter = express.Router();
const { Food } = require('../models/index');

foodRouter.post("/food", createFood);
foodRouter.get("/food", getFood);
foodRouter.get("/food/:id", getOneFood);

foodRouter.put("/food/:id", updateFood);
foodRouter.delete("/food/:id", deleteFood);

async function createFood(req, res) {
    let newFood = req.body;
    let resultFood = await Food.create(newFood);
    res.status(201).json(resultFood);
}

async function getFood(req, res) {
    let foodResult = await Food.findAll();
    res.status(200).json(foodResult);
}

async function getOneFood(req, res) {
    let oneFood = req.params.id
    let foodResult = await Food.findOne({where :{id : oneFood }});
    res.status(200).json(foodResult);
}

async function updateFood(req, res) {
    let foodId = parseInt(req.params.id);
    let updateFood = req.body;
    let foundFood = await Food.findOne({ where: { id: foodId } });
    let updatedFood = await foundFood.update(updateFood);
    res.status(201).json(updatedFood);
}
async function deleteFood(req, res) {
    let foodId = parseInt(req.params.id);
    let deleteFood = await Food.destroy({ where: { id: foodId } });
    res.status(204).json(deleteFood);
}

module.exports = foodRouter;
