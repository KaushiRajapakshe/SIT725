let collection = require('../models/food.js');

const postFood = (req, res) => {
    var newFood = req.body;
    var newFood = {
        path: req.body.path,
        title: req.body.title,
        subTitle: req.body.subTitle,
        description: req.body.description,
    };
    collection.postFood(newFood, (err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: "Cart successfully added" });
        }
        else {
            res.json({ statusCode: 400, message: err })
        }
    });
}

const getAllFoods = (req, res) => {
    collection.getAllFoods((err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: "Get all cards success" });
        }
    });
}

module.exports = { postFood, getAllFoods }