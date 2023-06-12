'use strict';
const express = require("express");
const app = express();
const foodRouter = require('./routes/food');
const notFoundHandler = require('./error-handlers/404')
const errorHandler = require ('./error-handlers/505')

app.use(express.json());

app.use(foodRouter);

app.get('/', welcomeHandler);
function welcomeHandler(req, res) {
    res.status(200).send('hi');
}

function start(port) {
    app.listen(port, () => {
        console.log(`server is up and listen on ${port}`)
    });
}

app.use('*', notFoundHandler);
app.use(errorHandler)


module.exports = {
    start: start,
    app: app,
}