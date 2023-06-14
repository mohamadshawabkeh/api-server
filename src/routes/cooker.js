const express = require('express');
const cookersRouter = express.Router();
const Collection = require('../lib/collection');
const { CookersModel, FoodModel } = require('../models/index');
cookersRouter.get("/cookers", getAllcookers);
cookersRouter.get("/cookers/:id", getOnecookers);
cookersRouter.post("/cookers", createcookers);
cookersRouter.put("/cookers/:id", updatecookers);
cookersRouter.delete("/cookers/:id", deletecookers);



cookersRouter.get("/cookersFood/:id", cookersOrders);
async function cookersOrders(req, res) {
    const cookersId = parseInt(req.params.id);
    let cookersFoodResult = await CookersModel.readCookersFood(cookersId, FoodModel.model);
    res.status(200).json(cookersFoodResult);
}
async function getAllcookers(req, res) {
    let cookersResult = await CookersModel.read();
    res.status(200).json(cookersResult);
}

async function getOnecookers(req, res) {
    const cookersId = parseInt(req.params.id);
    let cookers = await CookersModel.read(cookersId)
    res.status(200).json(cookers);
}
async function createcookers(req, res) {
    let newCookers = req.body;
    let cookers = await CookersModel.add(newCookers);
    res.status(201).json(cookers);
}
async function updatecookers(req, res) {
    let cookersId = parseInt(req.params.id);
    let updatecookers = req.body;
    let foundcookers = await CookersModel.update(updatecookers, cookersId);
    res.status(201).json(foundcookers);
}
async function deletecookers(req, res) {
    let cookersId = parseInt(req.params.id);
    let deletecookers = await CookersModel.delete(cookersId);
    res.status(204).json(deletecookers);
}

module.exports = cookersRouter;