const { client } = require('../dbConnection.js');

const getAllFoods = (callback) => {
    try {
        client.connect((err) => {
            if (!err) {
                console.log('MongoDB connection connected')
            }
            const collection = client.db("food").collection('food');
            collection.find({}).toArray(callback);
        });
    } catch (ex) {
        console.error(ex);
    }
}

const postFood = (card, callback) => {
    try {
        client.connect((err) => {
            if (!err) {
                console.log('MongoDB connection connected')
            }
            const collection = client.db("food").collection('food');
            collection.insertOne(card, callback);
        });
    } catch (ex) {
        console.error(ex);
    }
}

module.exports = { postFood, getAllFoods }